import React, { Component } from 'react'

export default class Contact extends Component {
    state = {
        businessName: "",
        contactName: "",
        contactEmail: "",
        contactPhone: "",
        serviceRequested: "",
        deadlineDate: "",
        businessType: "",
        serviceStatus: "",
        internalOnly: true,
        numberOfFloors: 1,
        summary: ""
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = ({target: {name, value}}) => this.setState({[name]: value})

    render() {
        return (
            <main className="contact">
                <section className="contact__left">
                    <h1>
                        Contact Us
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis eos ea rerum ex explicabo quis, quisquam debitis excepturi? Nobis aperiam ipsam animi dolore. Vel optio magnam suscipit voluptas delectus?</p>
                </section>

                <form className="contact__form" onSubmit={this.handleSubmit}>
                    <label htmlFor="businessName">Business Name</label>
                    <input 
                        onChange={this.handleChange}
                        name="businessName"
                        value={this.state.businessName}
                        placeholder="JD Enterprise"
                        type="text"
                        required
                        />
                    <label htmlFor="contactName">Contact Name</label>
                    <input 
                        required
                        onChange={this.handleChange}
                        name="contactName"
                        value={this.state.contactName}
                        placeholder="John Doe"
                        type="text"
                        />
                    <label htmlFor="contactEmail">Contact Email</label>
                    <input 
                        required
                        onChange={this.handleChange}
                        name="contactEmail"
                        value={this.state.contactEmail}
                        placeholder="support@jdenterprise.com"
                        type="email"
                    />
                    <label htmlFor="contactPhone">Contact Phone</label>
                    <input 
                        required
                        onChange={this.handleChange}
                        name="contactPhone"
                        value={this.state.contactPhone}
                        placeholder="775-555-5555"
                        type="tel"
                    />
                    <label htmlFor="serviceRequested">Type of Service Needed</label>
                    <input 
                        required
                        onChange={this.handleChange}
                        name="serviceRequested"
                        value={this.state.serviceRequested}
                        placeholder="installation"
                        type="text"
                        />
                    <label htmlFor="deadlineDate">Deadline of Project</label>
                    <input 
                        onChange={this.handleChange}
                        name="deadlineDate"
                        value={this.state.deadlineDate}
                        type="date"
                        />
                    <label htmlFor="businessType">Business Type</label>
                    <input 
                        required
                        onChange={this.handleChange}
                        name="businessType"
                        value={this.state.businessType}
                        placeholder="Motel"
                        type="text"
                    />
                    <label htmlFor="serviceStatus">Do you currently have internet service?</label>
                    <input 
                        onChange={this.handleChange}
                        name="serviceStatus"
                        value={this.state.serviceStatus}
                        placeholder="Yes"
                        type="text"
                    />
                    <label htmlFor="internalOnly">Is the installation internal, external, or both?</label>
                    <input 
                        onChange={this.handleChange}
                        name="internalOnly"
                        value={this.state.internalOnly}
                        placeholder="Both"
                        type="text"
                    />
                    <label htmlFor="numberOfFloors">Number of Floors of installation</label>
                    <input 
                        onChange={this.handleChange}
                        name="numberOfFloors"
                        value={this.state.numberOfFloors}
                        defaultValue={1}
                        type="number"
                    />
                    <label htmlFor="summary">Any additional info you want to share</label>
                    <textarea 
                        onChange={this.handleChange}
                        name="summary"
                        value={this.state.summary}
                        placeholder="Anything we didnt cover in the form..."
                    />
                </form>
            </main>
        )
    }
}
