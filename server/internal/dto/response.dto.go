package dto

type Response[T any] struct {
	Content T	`json:"content"`
	Message string `json:"message"`
	Error bool `json:"error"`
}