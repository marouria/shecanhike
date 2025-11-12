export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const { email } = body;

  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email is required",
    });
  }

  const hubspotApiKey = config.hubspotApiKey;

  if (!hubspotApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "HubSpot API key is not configured",
    });
  }

  try {
    // Create or update contact in HubSpot
    const response = await $fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${hubspotApiKey}`,
        },
        body: {
          properties: {
            email,
            // Add a custom property to track where the contact came from
            hs_lead_status: "NEW",
            lifecyclestage: "lead",
          },
        },
      }
    );

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    // If contact already exists (409 conflict), try to update it instead
    if (error.response?.status === 409) {
      try {
        // Search for the contact by email
        const searchResponse = await $fetch(
          "https://api.hubapi.com/crm/v3/objects/contacts/search",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${hubspotApiKey}`,
            },
            body: {
              filterGroups: [
                {
                  filters: [
                    {
                      propertyName: "email",
                      operator: "EQ",
                      value: email,
                    },
                  ],
                },
              ],
            },
          }
        );

        const contactId = (searchResponse as any).results?.[0]?.id;

        if (contactId) {
          // Update the existing contact
          const updateResponse = await $fetch(
            `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${hubspotApiKey}`,
              },
              body: {
                properties: {
                  email,
                  hs_lead_status: "NEW",
                  lifecyclestage: "lead",
                },
              },
            }
          );

          return {
            success: true,
            data: updateResponse,
            updated: true,
          };
        }
      } catch (updateError) {
        console.error("Error updating contact:", updateError);
        throw createError({
          statusCode: 500,
          statusMessage: "Failed to update contact in HubSpot",
        });
      }
    }

    console.error("HubSpot API error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to save contact to HubSpot",
    });
  }
});
