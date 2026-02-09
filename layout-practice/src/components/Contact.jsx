import Layout from "./Layout";

export default function Contact() {
    return(
        <Layout>
            <div>This is Contact page</div>
            <form>
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="service" />
                <button>Submit</button>
            </form>
        </Layout>
    )
}