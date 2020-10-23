import DateTimeFormat = Intl.DateTimeFormat;

export interface IAppState {
	authUser: any;
}

export interface Roles {
	isAdmin: boolean;
	isMember: boolean;
}

export interface QuestionValues {
	[name: string]: string;
}

/***
 * Reference Data
 * */
export interface IReferenceData {
	ID: number;
	TYPE: string;
	LABEL: string;
	PARENT_ID: number;
	SORT_ORDER: number;
	IS_ACTIVE: number;
}

/***
 * Sorting / Paging
 */
export interface IPagination {
	startIndex: number;
	batchSize: number;
}

export interface ISort {
	sortBy: string;
	ascDesc: string;
}

/***
 * Filtering
 */
export interface IFilterQuery {
	operator: string;
	column: string;
	value: string | number | string[];
}

/***
 * Begin specific ERROR component grouping example
 ***/
export interface SomeValidationError {
	type: string;
	e_length?: string;
	e_width?: string;
	e_quantity?: string;
}
