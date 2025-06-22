import type { APIResponse, GetAllIncidentReportResponse, GetIncidentReportByIdResponse, GetIncidentReportCategoryResponse, PostIncidentReportRequest, PostIncidentReportResponse, PutIncidentReportRequest, PutIncidentReportResponse } from "../dto";
import { api } from "../utils";

interface IncidentReportServiceSpec {
  CreateNewIncidentReport: (request: PostIncidentReportRequest) => Promise<APIResponse<PostIncidentReportResponse>>
  GetAllIncidentReports: () => Promise<APIResponse<GetAllIncidentReportResponse[]>>
  GetIncidentReportById: (id: number) => Promise<APIResponse<GetIncidentReportByIdResponse>>
  GetIncidentReportCategory: () => Promise<APIResponse<GetIncidentReportCategoryResponse[]>>
  UpdateIncidentReport: (request: PutIncidentReportRequest) => Promise<APIResponse<PutIncidentReportResponse>>
  DeleteIncidentReport: (id: number) => Promise<APIResponse<null>>
}

const IncidentReportService: IncidentReportServiceSpec = {
  CreateNewIncidentReport: async function (request: PostIncidentReportRequest): Promise<APIResponse<PostIncidentReportResponse>> {
    const response = await api.post('/incident-reports', request)

    return {
      content:  response.data.content,
      message:  response.data.message,
      error:    response.data.error,
      status:   response.status
    }
  },
  GetAllIncidentReports: async function (): Promise<APIResponse<GetAllIncidentReportResponse[]>> {
    const response = await api.get('/incident-reports')

    return {
      content:  response.data.content,
      message:  response.data.message,
      error:    response.data.error,
      status:   response.status
    }
  },
  GetIncidentReportById: async function (id: number): Promise<APIResponse<GetIncidentReportByIdResponse>> {
    const response = await api.get(`/incident-reports/${id}`)

    return {
      content:  response.data.content,
      message:  response.data.message,
      error:    response.data.error,
      status:   response.status
    }
  },
  GetIncidentReportCategory: async function (): Promise<APIResponse<GetIncidentReportCategoryResponse[]>> {
    const response = await api.get('/incident-reports/categories')

    return {
      content:  response.data.content,
      message:  response.data.message,
      error:    response.data.error,
      status:   response.status
    }
  },
  UpdateIncidentReport: async function (request: PutIncidentReportRequest): Promise<APIResponse<PutIncidentReportResponse>> {
    const response = await api.put('/incident-reports', request)

    return {
      content: response.data.content,
      message: response.data.message,
      error:   response.data.error,
      status:  response.status
    }
  },
  DeleteIncidentReport: async function (id: number): Promise<APIResponse<null>> {
    const response = await api.delete(`/incident-reports/${id}`)
    return {
      content: null,
      message: response.data.message || `Successfully delete report id ${id}`,
      error: response.data.error || false,
      status: response.status
    }
  }
}

export default IncidentReportService