---
id: response-codes
title: Response Codes
sidebar_position: 2
---

The list of HTTP status response codes returned by the API.

---

HTTP status response codes indicate whether an HTTP request has been successfully completed.

You can find the full list of status codes on [MDN's website](https://developer.mozilla.org/en-US/docs/Web/HTTP "MDN docs about HTTP status response codes"). This is the list of the status codes returned by the Onna API:

| Status   | Text | Description |
|----------|------|------|
| **200**  | [OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200 "MDN docs about HTTP status response code 200") | Success |
| **201**  | Created | Response code indicates that the request has succeeded and has led to the creation of a resource |
| **202**  | Accceppted| Here the details|
| **400**  | [Bad request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400 "MDN docs about HTTP status response code 400") | The request is invalid. This code is usually related to an incorrect syntax or format of your request.    |
| **401**  | [Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401 "MDN docs about HTTP status response code 401") | Missing or wrong authentication. It can be because of incorrect credentials or because you don't have permissions.|
| **404**  | [Not found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404 "MDN docs about HTTP status response code 404") | The requested resource cannot be found. For example, you are making a request for a  non-existing account. |
| **412**  | [Preconditions failed](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412 "MDN docs about HTTP status response code 412") | The preconditions of the request aren't valid. For example, something from your headers. |
