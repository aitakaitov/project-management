# Backend.ProjectsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectProjectIdDelete**](ProjectsApi.md#projectProjectIdDelete) | **DELETE** /project/{projectId} | 
[**projectProjectIdPost**](ProjectsApi.md#projectProjectIdPost) | **POST** /project/{projectId} | 
[**projectProjectIdTaskIdDelete**](ProjectsApi.md#projectProjectIdTaskIdDelete) | **DELETE** /project/{projectId}/{taskId} | 
[**projectsGet**](ProjectsApi.md#projectsGet) | **GET** /projects | 
[**projectsPost**](ProjectsApi.md#projectsPost) | **POST** /projects | 



## projectProjectIdDelete

> projectProjectIdDelete(projectId)



### Example

```javascript
import Backend from 'backend';

let apiInstance = new Backend.ProjectsApi();
let projectId = "projectId_example"; // String | 
apiInstance.projectProjectIdDelete(projectId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectProjectIdPost

> projectProjectIdPost(projectId, opts)



### Example

```javascript
import Backend from 'backend';

let apiInstance = new Backend.ProjectsApi();
let projectId = "projectId_example"; // String | 
let opts = {
  'createTaskRequest': new Backend.CreateTaskRequest() // CreateTaskRequest | 
};
apiInstance.projectProjectIdPost(projectId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## projectProjectIdTaskIdDelete

> projectProjectIdTaskIdDelete(taskId, projectId)



### Example

```javascript
import Backend from 'backend';

let apiInstance = new Backend.ProjectsApi();
let taskId = "taskId_example"; // String | 
let projectId = "projectId_example"; // String | 
apiInstance.projectProjectIdTaskIdDelete(taskId, projectId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**|  | 
 **projectId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectsGet

> ProjectList projectsGet()



### Example

```javascript
import Backend from 'backend';

let apiInstance = new Backend.ProjectsApi();
apiInstance.projectsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ProjectList**](ProjectList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## projectsPost

> IdResponse projectsPost(opts)



### Example

```javascript
import Backend from 'backend';

let apiInstance = new Backend.ProjectsApi();
let opts = {
  'createProjectRequest': new Backend.CreateProjectRequest() // CreateProjectRequest | 
};
apiInstance.projectsPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProjectRequest** | [**CreateProjectRequest**](CreateProjectRequest.md)|  | [optional] 

### Return type

[**IdResponse**](IdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

