import { useForm } from 'react-hook-form'
import type { GetIncidentReportCategoryResponse, PostIncidentReportRequest, PutIncidentReportRequest } from '../../dto'
import { incidentReportStatusAsArray } from '../../types'
import { useEffect, useState } from 'react'
import IncidentReportService from '../../services/incident_report.service'
import GlobalActionButton from '../common/GlobalActionButton'

interface Props {
    onSubmitHandler: (data: object) => Promise<void>
    defaultValues: PutIncidentReportRequest | PostIncidentReportRequest
}

const ReportForm = ({onSubmitHandler, defaultValues}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<PostIncidentReportRequest | PutIncidentReportRequest>({
        defaultValues: defaultValues
    })
    
    const [formCategories, setFormCategories] = useState<GetIncidentReportCategoryResponse[] | null>([])


    const fetchIncidentReportCategory = async () => {
        const response = await IncidentReportService.GetIncidentReportCategory()
        setFormCategories(response.content)
    }

    useEffect(() => {
        fetchIncidentReportCategory()
    }, [])


    return (
        <form className='min-w-[300px]' onSubmit={handleSubmit(onSubmitHandler)}>

            <div className="flex flex-col gap-2">

                <div className='flex flex-col'>
                    <label htmlFor="title">Title</label>
                    <input className='border-gray-200 border pl-1' placeholder='Title' {...register('title', { required: 'Title is required' })} />
                    {errors.title && <span className='text-red-500'>{errors.title.message}</span>}
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="description">Description</label>
                    <input className='border-gray-200 border pl-1' placeholder='Description...' {...register('description')} />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="category">Category</label>
                    <select id="category" {...register('category_id', { required: 'Category is required', valueAsNumber: true })}>
                        <option value="">-- Choose Category --</option>
                        {
                            formCategories?.map((c, index) => {
                                return <option key={index} value={c.id}>{c.name}</option>
                            })
                        }
                    </select>
                    {errors.category_id && <span className='text-red-500'>{errors.category_id.message}</span>}
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="status">Status</label>
                    <select id="status" {...register('status', { required: 'Status is required' })}>
                        {
                            incidentReportStatusAsArray.map((s, index) => {
                                return <option key={index} value={s}>{s}</option>
                            })
                        }
                    </select>
                    {errors.status && <span className='text-red-500'>{errors.status.message}</span>}
                </div>

                <GlobalActionButton
                    buttonType='submit'
                    callbackFn={() => { }}
                >
                    Submit
                </GlobalActionButton>
            </div>

        </form>
    )
}

export default ReportForm
