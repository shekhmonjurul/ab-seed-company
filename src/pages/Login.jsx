import { flex } from "@mui/system"
import { useState } from "react"
import handleFetch from "../logic/handleFetch"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [formData, setFormData] = useState({
        employeeId: "",
        password: ""
    })
    const redirect = useNavigate()

    const handleInput = (field) => (event) => {
        const { value } = event.target
        const inputValue = field === "employeeId" ? Number(value) : value
        setFormData(prev => ({ ...prev, [field]: inputValue }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const url = `http://localhost:5000/loging/login`
        const data = await handleFetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        Cookies.set("token", data?.data)
        if (Cookies.get("token")) {
            redirect("/addmin/ecom/order/search")
        }else{
            redirect("/login")
        }


    }

    return (
        <div className="text-black">
            <form onSubmit={handleSubmit}>
                <label htmlFor="empleyeid">
                    Enter Employe ID
                    <input
                        type="number"
                        placeholder="Enter emplye id"
                        id="empleyeid"
                        value={formData.employeeId}
                        onChange={handleInput("employeeId")}
                    />
                </label>
                <br />
                <label htmlFor="password">
                    Enter your password
                    <input
                        type="text"
                        id="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInput("password")}
                    />
                </label>
                <br />

                <button type="submit">Log In</button>

            </form>
        </div>
    )
}