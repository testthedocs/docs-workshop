---
sidebar_position: 1
title: Intro
---

> Braze provides a high-performance REST API to allow you to track users, send messages, export data, and more.
> This reference article covers what a REST API is, the terminology, a brief overview of API keys, and API limits.

## What is a REST API?

A REST API is a way to programmatically transfer information over the web using a predefined schema. Braze has created many different endpoints which perform various actions and/or return various data.

:::note
Customers using Braze's EU database should use the `https://rest.fra-01.braze.eu/` endpoint. This endpoint will be used when configuring the Braze [iOS]({{site.baseurl}}/developer_guide/platform_integration_guides/ios/initial_sdk_setup/completing_integration/#compile-time-endpoint-configuration-recommended), [Android]({{site.baseurl}}/developer_guide/platform_integration_guides/android/initial_sdk_setup/android_sdk_integration/#step-2-configure-the-braze-sdk-in-brazexml), and [Web]({{site.baseurl}}/developer_guide/platform_integration_guides/web/initial_sdk_setup/#step-2-initialize-braze) SDKs.
:::

## API definitions

The following lists a brief overview of terms you may see in the Braze REST API documentation.

### Endpoints

Braze manages a number of different instances for our dashboard and REST Endpoints. When your account is provisioned you will log in to one of the following URLs. Use the correct REST endpoint based on which instance you are provisioned to. If you are unsure, open a [support ticket][support] or use the following table to match the URL of the dashboard you use to the correct REST Endpoint.

:::important
When using endpoints for API calls, use the "REST Endpoint".

For SDK integration, use the ["SDK Endpoint"]({{site.baseurl}}/user_guide/administrative/access_braze/sdk_endpoints/), not the "REST Endpoint".
:::

|Instance|URL|REST Endpoint|SDK Endpoint|
|---|---|---|
|US-01| `https://dashboard-01.braze.com` | `https://rest.iad-01.braze.com` | `sdk.iad-01.braze.com` |
|US-02| `https://dashboard-02.braze.com` | `https://rest.iad-02.braze.com` | `sdk.iad-02.braze.com` |
|US-03| `https://dashboard-03.braze.com` | `https://rest.iad-03.braze.com` | `sdk.iad-03.braze.com` |
|US-04| `https://dashboard-04.braze.com` | `https://rest.iad-04.braze.com` | `sdk.iad-04.braze.com` |
|US-05| `https://dashboard-05.braze.com` | `https://rest.iad-05.braze.com` | `sdk.iad-05.braze.com` |
|US-06| `https://dashboard-06.braze.com` | `https://rest.iad-06.braze.com` | `sdk.iad-06.braze.com` |
|US-08| `https://dashboard-08.braze.com` | `https://rest.iad-08.braze.com` | `sdk.iad-08.braze.com` |
|EU-01| `https://dashboard-01.braze.eu` | `https://rest.fra-01.braze.eu` | `sdk.fra-01.braze.eu` |
|EU-02| `https://dashboard-02.braze.eu` | `https://rest.fra-02.braze.eu` | `sdk.fra-02.braze.eu` |


### Company secret explanation

The `company_secret` was formerly included with all API requests but has been deprecated as of October 2014. This field will be ignored for all future API requests to ensure backward compatibility.

### App group REST API keys

:::note
For a deeper dive on the different kinds of API Keys here at Braze, check out our dedicated <a href="{{site.baseurl}}/api/api_key/">API Keys</a> and <a href="{{site.baseurl}}/api/identifier_types/">API Identifier Types</a> reference articles.

:::

The `api_key` included in each request acts as an authentication key that allows your server code to utilize our REST APIs. Within your company, each app group will have a unique set of REST API Keys. They can be found within the Braze dashboard by navigating to the Developer Console section for each app group. To use the REST API for any given App Group, you must create keys and give them permissions.

#### API key permissions

API Keys are used to authenticate an API call. When you create a new REST API Key, you need to give it access to specific endpoints. By assigning specific permissions to an API Key, you can limit exactly which calls an API Key can authenticate.

A good security practice is to assign a user only as much access as is necessary to complete their job: this principle can also be applied to API Keys by assigning permissions to each key. These permissions give you better security and control over the different areas of your account.

:::warning
Given that REST API Keys allow access to potentially sensitive REST API endpoints, ensure they are stored and used securely. For example, do not use this key to make AJAX calls from your website or expose it in any other public manner.
:::

For help with this process, open a [support ticket](/help).

#### API IP allowlisting

For additional security, you can specify a list of IP addresses and subnets which are allowed to make REST API requests for a given REST API Key. This is referred to as allowlisting, or whitelisting. To allow specific IP addresses or subnets, add them to the **Whitelist IPs** section when creating a new REST API Key:

If you don’t specify any, requests can be sent from any IP address.

:::tip
Making a Braze-to-Braze webhook and using allowlisting? Check out our list of [IPs to whitelist]({{site.baseurl}}/user_guide/message_building_by_channel/webhooks/creating_a_webhook/#ip-whitelisting).
:::

#### Creating and managing REST API keys

To create a new REST API Key, visit the [Developer Console][8] on your Braze dashboard. This page displays your existing API Keys. To create a new key, click **Create New API Key**.

You can then to do the following:

- Give your new key a name for identification at a glance
- Select which permissions you would like to be associated with your new key
- Specify allowlisted IP addresses and subnets for the new key

Existing REST API Keys can be viewed or deleted by clicking settings <i class="fas fa-gear"></i> and selecting the corresponding option.



:::important
Keep in mind that once you create a new API Key, you cannot edit the scope of permissions or the allowlisted IPs. This limitation is in place for security reasons. If you need to change the scope of a key, create a new key with the updated permissions and implement that key in place of the old one. Once you've completed your implementation, go ahead and delete the old key.
:::

### External user ID explanation

The `external_id` serves as a unique user identifier for whom you are submitting data. This identifier should be the same as the one you set in the Braze SDK in order to avoid creating multiple profiles for the same user.

### Braze user ID explanation

The `braze_id` serves as a unique user identifier that is set by Braze. This identifier can be used to delete users through the REST API in addition to external_ids.
