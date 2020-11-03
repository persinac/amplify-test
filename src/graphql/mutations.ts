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
export const deleteWrfcenterInventoryAudit = /* GraphQL */ `
  mutation DeleteWrfcenterInventoryAudit($INVENTORY_AUDIT_ID: Int!) {
    deleteWRFCENTER_INVENTORY_AUDIT(INVENTORY_AUDIT_ID: $INVENTORY_AUDIT_ID) {
      INVENTORY_AUDIT_ID
      INVENTORY_ITEM_ID
      QUANTITY
      SUNSET
      CREATED_BY
      CREATED_DATETIME
      LAST_MODIFIED_BY
      LAST_MODIFIED_DATETIME
      IS_ACTIVE
    }
  }
`;
export const createWrfcenterInventoryAudit = /* GraphQL */ `
  mutation CreateWrfcenterInventoryAudit(
    $createWRFCENTER_INVENTORY_AUDITInput: CreateWRFCENTER_INVENTORY_AUDITInput!
  ) {
    createWRFCENTER_INVENTORY_AUDIT(
      createWRFCENTER_INVENTORY_AUDITInput: $createWRFCENTER_INVENTORY_AUDITInput
    ) {
      INVENTORY_AUDIT_ID
      INVENTORY_ITEM_ID
      QUANTITY
      SUNSET
      CREATED_BY
      CREATED_DATETIME
      LAST_MODIFIED_BY
      LAST_MODIFIED_DATETIME
      IS_ACTIVE
    }
  }
`;
export const updateWrfcenterInventoryAudit = /* GraphQL */ `
  mutation UpdateWrfcenterInventoryAudit(
    $updateWRFCENTER_INVENTORY_AUDITInput: UpdateWRFCENTER_INVENTORY_AUDITInput!
  ) {
    updateWRFCENTER_INVENTORY_AUDIT(
      updateWRFCENTER_INVENTORY_AUDITInput: $updateWRFCENTER_INVENTORY_AUDITInput
    ) {
      INVENTORY_AUDIT_ID
      INVENTORY_ITEM_ID
      QUANTITY
      SUNSET
      CREATED_BY
      CREATED_DATETIME
      LAST_MODIFIED_BY
      LAST_MODIFIED_DATETIME
      IS_ACTIVE
    }
  }
`;
export const deleteWrfcenterInventoryItem = /* GraphQL */ `
  mutation DeleteWrfcenterInventoryItem($INVENTORY_ITEM_ID: Int!) {
    deleteWRFCENTER_INVENTORY_ITEM(INVENTORY_ITEM_ID: $INVENTORY_ITEM_ID) {
      INVENTORY_ITEM_ID
      R_INVENTORY_ITEM_ID
      QUANTITY
      CREATED_BY
      CREATED_DATETIME
      LAST_MODIFIED_BY
      LAST_MODIFIED_DATETIME
      IS_ACTIVE
    }
  }
`;
export const createWrfcenterInventoryItem = /* GraphQL */ `
  mutation CreateWrfcenterInventoryItem(
    $createWRFCENTER_INVENTORY_ITEMInput: CreateWRFCENTER_INVENTORY_ITEMInput!
  ) {
    createWRFCENTER_INVENTORY_ITEM(
      createWRFCENTER_INVENTORY_ITEMInput: $createWRFCENTER_INVENTORY_ITEMInput
    ) {
      INVENTORY_ITEM_ID
      R_INVENTORY_ITEM_ID
      QUANTITY
      CREATED_BY
      CREATED_DATETIME
      LAST_MODIFIED_BY
      LAST_MODIFIED_DATETIME
      IS_ACTIVE
    }
  }
`;
export const updateWrfcenterInventoryItem = /* GraphQL */ `
  mutation UpdateWrfcenterInventoryItem(
    $updateWRFCENTER_INVENTORY_ITEMInput: UpdateWRFCENTER_INVENTORY_ITEMInput!
  ) {
    updateWRFCENTER_INVENTORY_ITEM(
      updateWRFCENTER_INVENTORY_ITEMInput: $updateWRFCENTER_INVENTORY_ITEMInput
    ) {
      INVENTORY_ITEM_ID
      R_INVENTORY_ITEM_ID
      QUANTITY
      CREATED_BY
      CREATED_DATETIME
      LAST_MODIFIED_BY
      LAST_MODIFIED_DATETIME
      IS_ACTIVE
    }
  }
`;
