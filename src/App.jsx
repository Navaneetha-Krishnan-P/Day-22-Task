import './App.css'
import Card from "./card"
import "bootstrap/dist/css/bootstrap.css"
function App() {
  let cards=[
    {
      name : "Free",
      price : 0,
      features :[
        {
          name : "Single user",
          enabled : true,
        },
        {
          name : "50GB Storage",
          enabled : true,
        },
        {
          name: "Unlimited Public Projects",
          enabled : true,
        },
        {
          name : "Community Access",
          enabled : true,
        },
        {
          name : "Unlimited Private Projects",
          enabled : false,
        },
        {
          name : "Dedicated Phone Support",
          enabled : false,
        },
        {
          name : "Free Subdomain",
          enabled : false,
        },
        {
          name : "Monthly Status Reports",
          enabled : false,
        }
      ]
    },
    {
      name : "Plus",
      price : 9,
      features :[
        {
          name : "Single user",
          enabled : true,
        },
        {
          name : "50GB Storage",
          enabled : true,
        },
        {
          name : "Unlimited Public Projects",
          enabled : true,
        },
        {
          name : "Community Access",
          enabled : true,
        },
        {
          name : "Unlimited Private Projects",
          enabled : true,
        },
        {
          name : "Dedicated Phone Support",
          enabled : true,
        },
        {
          name : "Free Subdomain",
          enabled : true,
        },
        {
          name : "Monthly Status Reports",
          enabled : false,
        }
      ]
    },
    {
      name : "Pro",
      price : 49,
      features :[
        {
          name : "Single user",
          enabled : true,
        },
        {
          name : "50GB Storage",
          enabled : true,
        },
        {
          name : "Unlimited Public Projects",
          enabled : true,
        },
        {
          name : "Community Access",
          enabled : true,
        },
        {
          name : "Unlimited Private Projects",
          enabled : true,
        },
        {
          name: "Dedicated Phone Support",
          enabled : true,
        },
        {
          name : "Free Subdomain",
          enabled : true,
        },
        {
          name : "Monthly Status Reports",
          enabled : true,
        }
      ]
    }
  ]
  return (
    <div className="container">
      <div className="row">
        {cards.map((data, index) => {
          return <Card data={data} key={index}/>
        })}
      </div>
    </div>

  )
}

export default App
