/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWrfcenterRData = /* GraphQL */ `
  query GetWrfcenterRData($ID: Int!) {
    getWRFCENTER_R_DATA(ID: $ID) {
      ID
      TYPE
      LABEL
      IS_ACTIVE
      PARENT_ID
      SORT_ORDER
    }
  }
`;
export const listWrfcenterRDatAs = /* GraphQL */ `
  query ListWrfcenterRDatAs {
    listWRFCENTER_R_DATAs {
      ID
      TYPE
      LABEL
      IS_ACTIVE
      PARENT_ID
      SORT_ORDER
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
