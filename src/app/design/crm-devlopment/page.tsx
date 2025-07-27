import Image from "next/image";
import designdevlop from "../../../Images/design&devlop.gif"
import Requestcard from "@/components/Requestcard/page";

export default function Crmdevlopment() {

  const crmBody = `CRM technology is used to profile customers as well as track their buying records in order to assist the sales staff in providing better service for each customer. Overall customer relationships are improved as a result.`
  const crmSolutions = ` are the strategies which place its customers in a pivotal position for the organization. It changes the focus of the organization to better exploit its key relationship with customers, to significant advantage for BOTH parties.`
  const brandsDoor = ` was established in 2002 and remains a leading consultancy firm in the field of Customer Relationship Management (CRM). Solving business problems with smart technology that integrates seamlessly with existing business processes is what we do best.\n\nOur team of highly experienced CRM consultants and software developers deliver CRM integration projects and consulting services across the entire Asia Pacific region.`
  const brandsDoor2 = `partner with you to understand your business and the critical relationships between your business goals, business processes, IT infrastructure and your staff and customers.\n\nOnly after we have gained an intimate knowledge of your business and customers do we set about laying the foundations for your business success.`
  const ultimatelyBrandDoor = ` provide a better insight into your business, improve your business processes, and reveal new ways of conducting your business with the goal of capturing the loyalty of existing clients and winning new customers.\n\nOutstanding customer relationships start with `
  const crmEm = `\n\nthebrandsdoor have an embracing Customer Relationship Management which is a difficult task for any organization to achieve in such a short span of time. Of course it required a lot of commitment, but also have a complete understanding and knowledge of the concepts.`
  return (
    <section className='pt-20'>
      <div className='h-75'>
        <Image src={designdevlop} alt='banner' className='h-75' />
      </div>
      <section className="m-10">
        <h1 className="text-2xl font-bold text-[#fdd007] leading-8 tracking-[0.035em]">Customer Relationship Management (CRM) Solutions</h1>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">In the world of information technology, <span className="font-bold dark:text-[#fdd007]">CRM</span> stands for <span className="font-bold dark:text-[#fdd007]">customer relationship management.</span>{crmBody}</p>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white"><span className="font-bold dark:text-[#fdd007]">CRM solutions</span>{crmSolutions}</p>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white"><span className="font-bold dark:text-[#fdd007]">thebrandsdoor</span>{brandsDoor}</p>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white"><span className="font-bold dark:text-[#fdd007]">thebrandsdoor</span>{brandsDoor2}<span className="font-bold dark:text-[#fdd007]"> thebrandsdoor</span></p>
        <p className="pt-5 leading-8 tracking-[0.035em] whitespace-pre-wrap dark:text-white">{brandsDoor2}<span className="font-bold dark:text-[#fdd007]"> Ultimately our thebrandsdoor</span>{ultimatelyBrandDoor}<span className="font-bold dark:text-[#fdd007]"> thebrandsdoor</span>{crmEm}</p>
        <Requestcard />
      </section>
    </section>
  )
}
