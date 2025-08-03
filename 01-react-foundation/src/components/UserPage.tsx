import axios from "axios"
import { useEffect } from "react"

export const UserPage = () => {

  useEffect(() => {

    axios.get('https://reqres.in/api/users?page=2', {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    })
      .then(resp => console.log(resp.data))
      .catch(err => console.log(err.response.data))
      



    // fetch('https://reqres.in/api/users?page=2', {
    //   headers: {
    //     'x-api-key': 'reqres-free-v1'
    //   }
    // })
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))


  }, [])

    return (
        <div>
            <h3>Usuarios:</h3>
            <table>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Nombre</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>avatar</td>
                  <td>nombre</td>
                  <td>email</td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}