export type APIResponse<T> = {
	content:  T | null;
	message:  String | null;
	error:    Boolean;
  status:   Number;
};
