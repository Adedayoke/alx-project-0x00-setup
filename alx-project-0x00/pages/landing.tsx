import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Book Now" styles="bg-blue-500 text-white rounded-sm px-4 py-2" />
      <Button title="CLick Now" styles="bg-blue-500 text-white rounded-md px-4 py-2" />
      <Button title="Bye for Now" styles="bg-blue-500 text-white rounded-full px-4 py-2" />
      <Button title="Hello for Now" styles="bg-blue-500 text-white rounded-lg px-4 py-2" />
    </div>
  )
}
export default Landing
