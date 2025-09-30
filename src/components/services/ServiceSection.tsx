import Service from './Service'
import TextHeading from '../TextHeading'

function ServiceSection() {
    const services = [
        {
            icon: "monitor",
            title: "Web Development",
            description: "Creating responsive, modern websites using React, Next.js, and cutting-edge technologies to deliver exceptional user experiences."
        },
        {
            icon: "mobile",
            title: "Mobile App Development",
            description: "Building native and cross-platform mobile applications for iOS and Android using React Native and Flutter frameworks."
        },
        {
            icon: "code",
            title: "Full-Stack Development",
            description: "End-to-end development solutions including frontend, backend, database design, and API integration for complete web applications."
        },
        {
            icon: "design",
            title: "UI/UX Design",
            description: "Designing intuitive user interfaces and seamless user experiences that engage users and drive business growth."
        },
        {
            icon: "ecommerce",
            title: "E-commerce Solutions",
            description: "Developing robust online stores with secure payment gateways, inventory management, and optimized checkout processes."
        },
        {
            icon: "maintenance",
            title: "Website Maintenance",
            description: "Ongoing support, updates, and optimization to ensure your website remains secure, fast, and up-to-date with latest technologies."
        }
    ];

    return (
        <section className='w-full flex flex-col items-center gap-y-2 py-15'>
            <div>
                <TextHeading heading='Services' text='What I Do for My Clients' />
            </div>

            <div className='w-full h-auto flex md:flex-row flex-col gap-6 flex-wrap justify-center items-center py-10 px-4'>
                {services.map((service, index) => (
                    <Service 
                        key={index}
                        className='2xl:w-[540px] xl:w-[490px] lg:w-[420px] md:w-[310px] sm:w-[530px]' 
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default ServiceSection;