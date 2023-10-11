import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const LOCAL_STORAGE_KEY = 'userId'

  function Home() {
    const storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    const [result, setResult] = useState('')

    useEffect(() =>{
      axios.get('http://localhost:5000/reserveDog/all', {
      })
      .then(function (response) {
        setResult(response.data)
        })
            .catch(function (error) {
              alert(`Prišlo je do napake prosim poskusite znova, ${error}`)
                console.log(`An error has accured, ${error}`)
        })
    }, [])

    function handleAdoptDog(id){
      let storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      //storedUser = storedUser.replace('"','');
      console.log(storedUser)
      console.log(id)
      const dogId = id.toString();
      
      axios.put(`http://localhost:5000/reserveDog/updateOwner/${dogId}/${storedUser}`, {
      })
      .then(function (response) {
        console.log(response.data)
              window.location.reload(false);
      })
      
    }
    

    if (!result) return null;
    return (
      <div>
      {storedUser !== null ? (
        <main className="container"><br></br><br></br><br></br>
        <div className="row">
          <div className ="d-flex justify-content-center">
            <div className="coll-span-3">
              <h1>Choose a dog you want to adopt</h1>
            </div>
          </div>
        </div>
        <div className="row">
        <Row xs={1} md={4} className="g-4">
        {result.map((result) => (
          
            <Col key={result.id}>
              <div className="card-body">
                <h5 className="card-title">{result.dogName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Date of Birth: {result.dob}</h6>
                <p className="card-text">Breed: {result.breed}</p>
                {result.reserverId === '0' ? (
                  <button type="submit" className="adopt-button" value={result.id} onClick={() => handleAdoptDog(result.id)}>Adopt</button>
                ) : (
                <button className="adopt-button-taken">Already Adopted</button>
                 )}
                
              </div>
            </Col>
        ))}
          </Row>
        </div>
        </main>
      ) : (
        <main className="container"><br></br><br></br><br></br>
        <div className ="d-flex justify-content-center">
          <div className="coll-span-3">
            <h1>Please login if you want to adopt a dog</h1>
          </div>
        </div>
        </main>
      )}
        
      </div>
    );
  }

export default Home;