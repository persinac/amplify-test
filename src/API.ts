/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWRFCENTER_R_DATAInput = {
  ID: number,
  TYPE?: string | null,
  LABEL?: string | null,
  IS_ACTIVE?: number | null,
  PARENT_ID?: number | null,
  SORT_ORDER?: number | null,
};

export type UpdateWRFCENTER_R_DATAInput = {
  ID: number,
  TYPE?: string | null,
  LABEL?: string | null,
  IS_ACTIVE?: number | null,
  PARENT_ID?: number | null,
  SORT_ORDER?: number | null,
};

export type CreateWRFCENTER_INVENTORY_AUDITInput = {
  INVENTORY_AUDIT_ID: number,
  INVENTORY_ITEM_ID: number,
  QUANTITY?: number | null,
  SUNSET?: number | null,
  CREATED_BY: string,
  CREATED_DATETIME: string,
  LAST_MODIFIED_BY: string,
  LAST_MODIFIED_DATETIME: string,
  IS_ACTIVE?: number | null,
};

export type UpdateWRFCENTER_INVENTORY_AUDITInput = {
  INVENTORY_AUDIT_ID: number,
  INVENTORY_ITEM_ID?: number | null,
  QUANTITY?: number | null,
  SUNSET?: number | null,
  CREATED_BY?: string | null,
  CREATED_DATETIME?: string | null,
  LAST_MODIFIED_BY?: string | null,
  LAST_MODIFIED_DATETIME?: string | null,
  IS_ACTIVE?: number | null,
};

export type CreateWRFCENTER_INVENTORY_ITEMInput = {
  R_INVENTORY_ITEM_ID: number,
  QUANTITY?: number | null,
  CREATED_BY: string,
  CREATED_DATETIME: string,
  LAST_MODIFIED_BY: string,
  LAST_MODIFIED_DATETIME: string,
  IS_ACTIVE?: number | null,
};

export type UpdateWRFCENTER_INVENTORY_ITEMInput = {
  INVENTORY_ITEM_ID: number,
  R_INVENTORY_ITEM_ID?: number | null,
  QUANTITY?: number | null,
  CREATED_BY?: string | null,
  CREATED_DATETIME?: string | null,
  LAST_MODIFIED_BY?: string | null,
  LAST_MODIFIED_DATETIME?: string | null,
  IS_ACTIVE?: number | null,
};

export type DeleteWrfcenterRDataMutationVariables = {
  ID: number,
};

export type DeleteWrfcenterRDataMutation = {
  deleteWRFCENTER_R_DATA:  {
    __typename: "WRFCENTER_R_DATA",
    ID: number,
    TYPE: string | null,
    LABEL: string | null,
    IS_ACTIVE: number | null,
    PARENT_ID: number | null,
    SORT_ORDER: number | null,
  } | null,
};

export type CreateWrfcenterRDataMutationVariables = {
  createWRFCENTER_R_DATAInput: CreateWRFCENTER_R_DATAInput,
};

export type CreateWrfcenterRDataMutation = {
  createWRFCENTER_R_DATA:  {
    __typename: "WRFCENTER_R_DATA",
    ID: number,
    TYPE: string | null,
    LABEL: string | null,
    IS_ACTIVE: number | null,
    PARENT_ID: number | null,
    SORT_ORDER: number | null,
  } | null,
};

export type UpdateWrfcenterRDataMutationVariables = {
  updateWRFCENTER_R_DATAInput: UpdateWRFCENTER_R_DATAInput,
};

export type UpdateWrfcenterRDataMutation = {
  updateWRFCENTER_R_DATA:  {
    __typename: "WRFCENTER_R_DATA",
    ID: number,
    TYPE: string | null,
    LABEL: string | null,
    IS_ACTIVE: number | null,
    PARENT_ID: number | null,
    SORT_ORDER: number | null,
  } | null,
};

export type DeleteWrfcenterInventoryAuditMutationVariables = {
  INVENTORY_AUDIT_ID: number,
};

export type DeleteWrfcenterInventoryAuditMutation = {
  deleteWRFCENTER_INVENTORY_AUDIT:  {
    __typename: "WRFCENTER_INVENTORY_AUDIT",
    INVENTORY_AUDIT_ID: number,
    INVENTORY_ITEM_ID: number,
    QUANTITY: number | null,
    SUNSET: number | null,
    CREATED_BY: string,
    CREATED_DATETIME: string,
    LAST_MODIFIED_BY: string,
    LAST_MODIFIED_DATETIME: string,
    IS_ACTIVE: number | null,
  } | null,
};

export type CreateWrfcenterInventoryAuditMutationVariables = {
  createWRFCENTER_INVENTORY_AUDITInput: CreateWRFCENTER_INVENTORY_AUDITInput,
};

export type CreateWrfcenterInventoryAuditMutation = {
  createWRFCENTER_INVENTORY_AUDIT:  {
    __typename: "WRFCENTER_INVENTORY_AUDIT",
    INVENTORY_AUDIT_ID: number,
    INVENTORY_ITEM_ID: number,
    QUANTITY: number | null,
    SUNSET: number | null,
    CREATED_BY: string,
    CREATED_DATETIME: string,
    LAST_MODIFIED_BY: string,
    LAST_MODIFIED_DATETIME: string,
    IS_ACTIVE: number | null,
  } | null,
};

export type UpdateWrfcenterInventoryAuditMutationVariables = {
  updateWRFCENTER_INVENTORY_AUDITInput: UpdateWRFCENTER_INVENTORY_AUDITInput,
};

export type UpdateWrfcenterInventoryAuditMutation = {
  updateWRFCENTER_INVENTORY_AUDIT:  {
    __typename: "WRFCENTER_INVENTORY_AUDIT",
    INVENTORY_AUDIT_ID: number,
    INVENTORY_ITEM_ID: number,
    QUANTITY: number | null,
    SUNSET: number | null,
    CREATED_BY: string,
    CREATED_DATETIME: string,
    LAST_MODIFIED_BY: string,
    LAST_MODIFIED_DATETIME: string,
    IS_ACTIVE: number | null,
  } | null,
};

export type DeleteWrfcenterInventoryItemMutationVariables = {
  INVENTORY_ITEM_ID: number,
};

export type DeleteWrfcenterInventoryItemMutation = {
  deleteWRFCENTER_INVENTORY_ITEM:  {
    __typename: "WRFCENTER_INVENTORY_ITEM",
    INVENTORY_ITEM_ID: number | null,
    R_INVENTORY_ITEM_ID: number,
    QUANTITY: number | null,
    CREATED_BY: string,
    CREATED_DATETIME: string,
    LAST_MODIFIED_BY: string,
    LAST_MODIFIED_DATETIME: string,
    IS_ACTIVE: number | null,
  } | null,
};

export type CreateWrfcenterInventoryItemMutationVariables = {
  createWRFCENTER_INVENTORY_ITEMInput: CreateWRFCENTER_INVENTORY_ITEMInput,
};

export type CreateWrfcenterInventoryItemMutation = {
  createWRFCENTER_INVENTORY_ITEM:  {
    __typename: "WRFCENTER_INVENTORY_ITEM",
    INVENTORY_ITEM_ID: number | null,
    R_INVENTORY_ITEM_ID: number,
    QUANTITY: number | null,
    CREATED_BY: string,
    CREATED_DATETIME: string,
    LAST_MODIFIED_BY: string,
    LAST_MODIFIED_DATETIME: string,
    IS_ACTIVE: number | null,
  } | null,
};

export type UpdateWrfcenterInventoryItemMutationVariables = {
  updateWRFCENTER_INVENTORY_ITEMInput: UpdateWRFCENTER_INVENTORY_ITEMInput,
};

export type UpdateWrfcenterInventoryItemMutation = {
  updateWRFCENTER_INVENTORY_ITEM:  {
    __typename: "WRFCENTER_INVENTORY_ITEM",
    INVENTORY_ITEM_ID: number | null,
    R_INVENTORY_ITEM_ID: number,
    QUANTITY: number | null,
    CREATED_BY: string,
    CREATED_DATETIME: string,
    LAST_MODIFIED_BY: string,
    LAST_MODIFIED_DATETIME: string,
    IS_ACTIVE: number | null,
  } | null,
};

export type GetWrfcenterRDataQueryVariables = {
  ID: number,
};

export type GetWrfcenterRDataQuery = {
  getWRFCENTER_R_DATA:  {
    __typename: "WRFCENTER_R_DATA",
    ID: number,
    TYPE: string | null,
    LABEL: string | null,
    IS_ACTIVE: number | null,
    PARENT_ID: number | null,
    SORT_ORDER: number | null,
  } | null,
};

export type ListWrfcenterRDatAsQuery = {
  listWRFCENTER_R_DATAs:  Array< {
    __typename: "WRFCENTER_R_DATA",
    ID: number,
    TYPE: string | null,
    LABEL: string | null,
    IS_ACTIVE: number | null,
    PARENT_ID: number | null,
    SORT_ORDER: number | null,
  } | null > | null,
};

export type GetWrfcenterInventoryAuditQueryVariables = {
  INVENTORY_AUDIT_ID: number,
};

export type GetWrfcenterInventoryAuditQuery = {
  getWRFCENTER_INVENTORY_AUDIT:  {
    __typename: "WRFCENTER_INVENTORY_AUDIT",
    INVENTORY_AUDIT_ID: number,
    INVENTORY_ITEM_ID: number,
    QUANTITY: number | null,
    SUNSET: number | null,
    CREATED_BY: string,
    CREATED_DATETIME: string,
    LAST_MODIFIED_BY: string,
    LAST_MODIFIED_DATETIME: string,
    IS_ACTIVE: number | null,
  } | null,
};

export type ListWrfcenterInventoryAudiTsQuery = {
  listWRFCENTER_INVENTORY_AUDITs:  Array< {
    __typename: "WRFCENTER_INVENTORY_AUDIT",
    INVENTORY_AUDIT_ID: number,
    INVENTORY_ITEM_ID: number,
    QUANTITY: number | null,
    SUNSET: number | null,
    CREATED_BY: string,
    CREATED_DATETIME: string,
    LAST_MODIFIED_BY: string,
    LAST_MODIFIED_DATETIME: string,
    IS_ACTIVE: number | null,
  } | null > | null,
};

export type GetWrfcenterInventoryItemQueryVariables = {
  INVENTORY_ITEM_ID: number,
};

export type GetWrfcenterInventoryItemQuery = {
  getWRFCENTER_INVENTORY_ITEM:  {
    __typename: "WRFCENTER_INVENTORY_ITEM",
    INVENTORY_ITEM_ID: number | null,
    R_INVENTORY_ITEM_ID: number,
    QUANTITY: number | null,
    CREATED_BY: string,
    CREATED_DATETIME: string,
    LAST_MODIFIED_BY: string,
    LAST_MODIFIED_DATETIME: string,
    IS_ACTIVE: number | null,
  } | null,
};

export type ListWrfcenterInventoryIteMsQuery = {
  listWRFCENTER_INVENTORY_ITEMs:  Array< {
    __typename: "WRFCENTER_INVENTORY_ITEM",
    INVENTORY_ITEM_ID: number | null,
    R_INVENTORY_ITEM_ID: number,
    QUANTITY: number | null,
    CREATED_BY: string,
    CREATED_DATETIME: string,
    LAST_MODIFIED_BY: string,
    LAST_MODIFIED_DATETIME: string,
    IS_ACTIVE: number | null,
  } | null > | null,
};

export type OnCreateWrfcenterRDataSubscription = {
  onCreateWRFCENTER_R_DATA:  {
    __typename: "WRFCENTER_R_DATA",
    ID: number,
    TYPE: string | null,
    LABEL: string | null,
    IS_ACTIVE: number | null,
    PARENT_ID: number | null,
    SORT_ORDER: number | null,
  } | null,
};

export type OnCreateWrfcenterInventoryAuditSubscription = {
  onCreateWRFCENTER_INVENTORY_AUDIT:  {
    __typename: "WRFCENTER_INVENTORY_AUDIT",
    INVENTORY_AUDIT_ID: number,
    INVENTORY_ITEM_ID: number,
    QUANTITY: number | null,
    SUNSET: number | null,
    CREATED_BY: string,
    CREATED_DATETIME: string,
    LAST_MODIFIED_BY: string,
    LAST_MODIFIED_DATETIME: string,
    IS_ACTIVE: number | null,
  } | null,
};

export type OnCreateWrfcenterInventoryItemSubscription = {
  onCreateWRFCENTER_INVENTORY_ITEM:  {
    __typename: "WRFCENTER_INVENTORY_ITEM",
    INVENTORY_ITEM_ID: number | null,
    R_INVENTORY_ITEM_ID: number,
    QUANTITY: number | null,
    CREATED_BY: string,
    CREATED_DATETIME: string,
    LAST_MODIFIED_BY: string,
    LAST_MODIFIED_DATETIME: string,
    IS_ACTIVE: number | null,
  } | null,
};
