import { useParams } from "react-router-dom"


const CountryPage = () => {
    const {id} = useParams();
    console.log(useParams())
  return (
    <div>
        the id of the country is {id}
    </div>
  )
}

export default CountryPage