import LeadForm from "../components/LeadForm";

export default function HomePage() {
  return ( 
    <main>
      <section> 
        <div>
      <h1> Orozco Law Firm</h1>
      <p>San Diego Attorney</p>
      </div>
      
      <div>
        <h2>Request a free consultation</h2>
        <LeadForm />
      </div>
      </section>
    </main>
  )
}