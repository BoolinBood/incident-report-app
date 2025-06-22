import { create } from "zustand";
import type { GetAllIncidentReportResponse } from "../dto";
import IncidentReportService from "../services/incident_report.service";

interface useIncidentReportStoreSpec {
    reports: GetAllIncidentReportResponse[] | null
    setReports: (reports: GetAllIncidentReportResponse[] | null) => void
    reFetch: () => void
}

export const useIncidentReportStore = create<useIncidentReportStoreSpec>((set) => ({
    reports: [],
    setReports: (reports: GetAllIncidentReportResponse[] | null) => set(() => ({ reports })),
    reFetch: async () => {
        const response = await IncidentReportService.GetAllIncidentReports()
        if (!response.error) {
            const reports = response.content
            set(() => ({reports}))
        }
    }
}))