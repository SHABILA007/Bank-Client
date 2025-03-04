import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Cashback() {
    let [dep, setDep] = useState(0);
    let [bal, setBal] = useState(0);
    let [product, setProducts] = useState([]);
    let [num,setNum]=useState()

    useEffect(() => {
        async function axiosProd() {
            try {
                const response = await axios.get('https://bank-server-hqgb.onrender.com/data');
                setProducts(response.data);
                if (response.data[num]) {
                    setBal(response.data[num].amount);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        axiosProd();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        if(bal>=dep){
        let deposit = Number(dep);
        let updatedBalance = Number(bal) - deposit;
        setBal(updatedBalance);

        try {
            await axios.put(`https://bank-server-hqgb.onrender.com/update/${product[num]._id}`, {
                amount: updatedBalance
            });
            alert("Updated Successfully!");
        } catch (error) {
            console.error("Error updating:", error);
        }
    }else{
        alert("Invalid Amount")
    }
    }

    function Changeuser(e){
        setNum(Number(e))
        setBal(product[e].amount)
    }

    return (
        <>
            <div id='cashback'>
                <h3>Cashback</h3>
                <div className="container">
                <form d="depositForm" onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="accountSelect">Select Account</label>
                <select onChange={(e) => Changeuser(e.target.value)}>
                    <option value={0}>Choose Your Account</option>
                    {product.map((item, index) => (<option key={index} value={index}>{item.name}</option>))}
                </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Amount</label>
                    <input type="number" onChange={(e) => setDep(e.target.value)} placeholder='Enter the Amount' />
                    </div>
                    <button type="Submit">SUBMIT</button>
                </form>
                <h2>Balance : {bal} </h2>
                </div>
            </div>  
        </>
    );
}
