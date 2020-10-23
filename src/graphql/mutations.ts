/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteWrfcenterRData = /* GraphQL */ `
  mutation DeleteWrfcenterRData($ID: Int!) {
    deleteWRFCENTER_R_DATA(ID: $ID) {
      ID
      TYPE
      LABEL
      IS_ACTIVE
      PARENT_ID
      SORT_ORDER
    }
  }
`;
export const createWrfcenterRData = /* GraphQL */ `
  mutation CreateWrfcenterRData(
    $createWRFCENTER_R_DATAInput: CreateWRFCENTER_R_DATAInput!
  ) {
    createWRFCENTER_R_DATA(
      createWRFCENTER_R_DATAInput: $createWRFCENTER_R_DATAInput
    ) {
      ID
      TYPE
      LABEL
      IS_ACTIVE
      PARENT_ID
      SORT_ORDER
    }
  }
`;
export const updateWrfcenterRData = /* GraphQL */ `
  mutation UpdateWrfcenterRData(
    $updateWRFCENTER_R_DATAInput: UpdateWRFCENTER_R_DATAInput!
  ) {
    updateWRFCENTER_R_DATA(
      updateWRFCENTER_R_DATAInput: $updateWRFCENTER_R_DATAInput
    ) {
      ID
      TYPE
      LABEL
      IS_ACTIVE
      PARENT_ID
      SORT_ORDER
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
