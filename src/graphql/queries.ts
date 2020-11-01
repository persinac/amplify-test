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
export const getWrfcenterInventoryAudit = /* GraphQL */ `
  query GetWrfcenterInventoryAudit($INVENTORY_AUDIT_ID: Int!) {
    getWRFCENTER_INVENTORY_AUDIT(INVENTORY_AUDIT_ID: $INVENTORY_AUDIT_ID) {
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
export const listWrfcenterInventoryAudiTs = /* GraphQL */ `
  query ListWrfcenterInventoryAudiTs {
    listWRFCENTER_INVENTORY_AUDITs {
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
export const getWrfcenterInventoryItem = /* GraphQL */ `
  query GetWrfcenterInventoryItem($INVENTORY_ITEM_ID: Int!) {
    getWRFCENTER_INVENTORY_ITEM(INVENTORY_ITEM_ID: $INVENTORY_ITEM_ID) {
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
export const listWrfcenterInventoryIteMs = /* GraphQL */ `
  query ListWrfcenterInventoryIteMs {
    listWRFCENTER_INVENTORY_ITEMs {
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
