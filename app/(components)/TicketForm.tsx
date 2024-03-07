"use client"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react";
interface TicketFormData {
    title: string,
    description: string,
    progress: number,
    priority: number,
    status: string,
    category: string
}
const TicketForm: React.FC = () => {
    const startingTicketData: TicketFormData = {
        title: "",
        description: "",
        progress: 0,
        priority: 1,
        status: "not started",
        category: "Harware Problem"
    };
    const router = useRouter()
    const [formData, setFormData] = useState<TicketFormData>(startingTicketData);
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        const { value, name } = event.target;
        setFormData((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const res = await fetch('/api/Tickets',{
            method:'POST',
            body: JSON.stringify({formData}),
            headers:{'Content-Type':"application/json"}
        })
        if(!res){
            throw new Error("Failed to create Ticket")
        }
        router.refresh();
        router.push('/')
    }
    return (
    <div className="w-[50%] text-center ml-[24%]">
        <form className="flex flex-col gap-3 w1/2" onSubmit={handleSubmit}>
            <h3>Create Your Ticket</h3>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                required={true}
                value={formData.title}
            />
            <label htmlFor="description">Description</label>
            <textarea
                name="description"
                id="description"
                onChange={handleChange}
                required={true}
                value={formData.description}
                rows={5}
            />
            <label htmlFor="category">Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
                <option value="Hardaware Problem">Hardaware Problem</option>
                <option value="Softaware Problem">Softaware Problem</option>
                <option value="Project">Project</option>
                <option value="UI Problem">UI Problem</option>
            </select>
            <label htmlFor="priority">Priority</label>
            <div>
                <input
                    type="radio"
                    id="priority-1"
                    name="priority"
                    onChange={handleChange}
                    value={1}
                    checked={formData.priority == 1}
                />
                <label>1</label>
                <input
                    type="radio"
                    id="priority-2"
                    name="priority"
                    onChange={handleChange}
                    value={2}
                    checked={formData.priority == 2}
                />
                <label>2</label>
                <input
                    type="radio"
                    id="priority-3"
                    name="priority"
                    onChange={handleChange}
                    value={3}
                    checked={formData.priority == 3}
                />
                <label>3</label>
                <input
                    type="radio"
                    id="priority-4"
                    name="priority"
                    onChange={handleChange}
                    value={4}
                    checked={formData.priority == 4}
                />
                <label>4</label>
                <input
                    type="radio"
                    id="priority-5"
                    name="priority"
                    onChange={handleChange}
                    value={5}
                    checked={formData.priority == 5}
                />
                <label>5</label>
                </div>
                <label htmlFor="progress">Progress</label>
                <input
                    type="range"
                    name="progress"
                    id="progress"
                    value={formData.progress}
                    min={0}
                    max={100}
                    onChange={handleChange} />
                <label htmlFor="Status">Status</label>
                <select
                    name="status"
                    id="Status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="not started">Not Started</option>
                    <option value="started">Started</option>
                    <option value="done">Done</option>
                </select>
                <input type="submit" className="btn bg-sky-600" value={'Create Ticket'} />
        </form>
    </div>
    )
}

export default TicketForm;