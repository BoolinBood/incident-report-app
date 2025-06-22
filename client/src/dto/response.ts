export type APIResponse<T> = {
	content:  T | null;
	message:  string | null;
	error:    boolean;
	status:   number;
};
