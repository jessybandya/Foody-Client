import {useRef, useState,useContext} from 'react';
import classes from './Checkout.module.css';
import styled from "styled-components";
import { COLORS } from "../../../src/Constant";
import CartContext from "../../store/cart-context"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const isEmpty = value => value.trim() === '';
const isSixChars = value => value.trim().length === 6;

const Checkout = (props) => {
  const { items } = useContext(CartContext);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
	const cartCtx = useContext(CartContext);
	const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const itemsPrice = totalAmount;
  const taxPrice = `${cartCtx.totalAmount.toFixed(2)}` * 15/100;
  const shippingPrice = itemsPrice < 150 ? "Free" : 20.00;
  const totalPrice =
    shippingPrice === "Free"
      ? itemsPrice * 1 + taxPrice
      : itemsPrice * 1 + taxPrice + shippingPrice;



  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  // const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    // const enteredPostalCode = postalCodeInputRef.current.value;
    // const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    // const enteredCityIsValid = !isEmpty(enteredCity);
    // const enteredPostalCodeIsValid = isEmpty(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      // city: enteredCityIsValid,
      // postalCode: enteredPostalCodeIsValid
    });

    const formIsValid = (
      enteredNameIsValid &&
      enteredStreetIsValid
      // enteredCityIsValid
      // enteredPostalCodeIsValid
      );


    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: age,
      // postalCode: enteredPostalCode
    });
  };

  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
  const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
  // const postalCodeControlClasses = `${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`;
  // const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;

  return (
  //   <OrderSummary>
  //         <Div1>
  //        <PriceDiv>
  //            <span>Price:</span> <span>{itemsPrice}</span>
  //          </PriceDiv>
  //          <PriceDiv>
  //            <span>Tax:</span> <span>{taxPrice}</span>
  //          </PriceDiv>
  //          <PriceDiv>
  //            <span>Delivery Charge:</span> <span>Ksh{shippingPrice}</span>
  //          </PriceDiv>
  //          <FinalPrice>
  //          <span>Total:</span> <span>{totalPrice}</span>
  //        </FinalPrice>
  //     </Div1>
  //     <Div2>
  //   <form className={classes.form} onSubmit={confirmHandler}>
  //     <div className={nameControlClasses}>
  //       <label htmlFor='name'>Your Name</label>
  //       <input type='text' id='name' ref = {nameInputRef} />
  //       {!formInputsValidity.name && <p>Please enter a valid name!</p>}
  //     </div>

  //     <div className={streetControlClasses}>
  //       <label htmlFor='street'>Street</label>
  //       <input type='text' id='street' ref = {streetInputRef} />
  //       {!formInputsValidity.street && <p>Please enter a valid street!</p>}
  //     </div>

  //     <div className={postalCodeControlClasses}>
  //       <label htmlFor='postal'>Postal Code</label>
  //       <input type='text' id='postal' ref = {postalCodeInputRef} />
  //       {!formInputsValidity.postalCode && <p>Please enter a valid postal code (6 characters long)!</p>}
  //     </div>

  //     <div className={cityControlClasses}>
  //       <label htmlFor='city'>City</label>
  //       <input type='text' id='city' ref = {cityInputRef} />
  //       {!formInputsValidity.city && <p>Please enter a valid city!</p>}
  //     </div>

  //     <div className={classes.actions}>
  //       <button type='button' onClick={props.onCancel}>
  //         Cancel
  //       </button>
  //       <button className={classes.submit}>Confirm</button>
  //     </div>

  //   </form>
  //  </Div2>
  //   </OrderSummary>
    <form className={classes.form} onSubmit={confirmHandler}>
      <OrderSummary>
        <Div1>
          <PriceDiv>
            <span>Price:</span> <span>{itemsPrice}</span>
          </PriceDiv>
          <PriceDiv>
            <span>Tax:</span> <span>{taxPrice}</span>
          </PriceDiv>
          <PriceDiv>
            <span>Delivery Charge:</span> <span>{shippingPrice}</span>
          </PriceDiv>
          <FinalPrice>
            <span>Total:</span> <span>Ksh{totalPrice}</span>
          </FinalPrice>
        </Div1>
        <Div2>
          <WrapperDiv>
            <label> Name:</label>

            <Input
              type="text"
              name="name"
              placeholder="full name"
              required
              id='name' 
             ref = {nameInputRef}
            />
          </WrapperDiv>
          <WrapperDiv>
            <label>Email: </label>

            <Input
              type="email"
              name="email"
              placeholder=" Email"
              id='email'
               ref = {streetInputRef}  
               required            
            />
          </WrapperDiv>
          {/* <WrapperDiv>
            <label>Postal: </label>

            <Input
              type="postal"
              name="postal"
              placeholder="Enter postal number"
              id='postal' ref = {postalCodeInputRef}
              required
            />
          </WrapperDiv> */}
          <WrapperDiv>
            <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width: "60%" }}>
        <InputLabel id="demo-simple-select-label">County:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="County"
          value={age}
          label="Age"
          onChange={handleChange}
          required
        >
          <MenuItem value="Baringo">Baringo</MenuItem>
          <MenuItem value="Bomet">Bomet</MenuItem>
          <MenuItem value="Bungoma">Bungoma</MenuItem>
          <MenuItem value="Busia">Busia</MenuItem>
          <MenuItem value="Elgeyo-Marakwet">Elgeyo-Marakwet</MenuItem>
          <MenuItem value="Embu">Embu</MenuItem>
          <MenuItem value="Garissa">Garissa</MenuItem>
          <MenuItem value="Homa Bay">Homa Bay</MenuItem>
          <MenuItem value="Isiolo">Isiolo</MenuItem>
          <MenuItem value="Kajiado">Kajiado</MenuItem>
          <MenuItem value="Kakamega">Kakamega</MenuItem>
          <MenuItem value="Kericho">Kericho</MenuItem>
          <MenuItem value="Kiambu">Kiambu</MenuItem>
          <MenuItem value="Kilifi">Kilifi</MenuItem>
          <MenuItem value="Kirinyaga">Kirinyaga</MenuItem>
          <MenuItem value="Kisii">Kisii</MenuItem>
          <MenuItem value="Mombasa">Mombasa</MenuItem>
          <MenuItem value="Nairobi">Nairobi</MenuItem>
        </Select>
      </FormControl>
    </Box>
            {/* <Input1
              type="text"
              name="city"
              placeholder="City"
              id='city' ref = {cityInputRef}
            /> */}

          </WrapperDiv>
        </Div2>

        <Div3>
          <Terms>
            <input type="checkbox" required></input>
            <label>Accept terms and condition</label>
          </Terms>

          <CheckoutButton style={{cursor: "pointer"}}>Checkout</CheckoutButton>
        </Div3>
     
      </OrderSummary>
   </form>



  );
};

const Grid = styled.div`
  margin: 2% 4%;
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  justify-content: stretch;
  align-items: stretch;
  grid-gap: 0.5rem;
  @media (max-width: 675px) {
    grid-template-columns: 20rem;
  }
`;
const EmptyMsg = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
  text-align: center;
  color: ${COLORS.primary};
`;

const AllOrders = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  padding: 0.5rem;
  margin: 0.3rem;
  grid-row: 1/3;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  border-radius: 0.3rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);

    transform: translateY(-0.2rem);
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

const ItemImg = styled.img`
  width: 4rem;
  height: 4rem;
  padding: 0.8rem;
  margin: auto;
`;

const ItemName = styled.div`
  font-size: 1.5rem;
  width: 20rem;
  padding: 0.8rem;
  margin: 0 1rem;
`;
const ButtonWrap = styled.div`
  padding: 0.8rem;
  margin: 0 1rem;
`;
const Price = styled.div`
  padding: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
  margin: 0.5rem;
  span {
    margin: 0 1rem;
  }
`;

const OrderSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  justify-content: stretch;
  align-items: stretch;
  grid-gap: 0.8rem;
  font-size: 1.1rem;
  margin: 0.5rem;

  @media only screen and (max-width: 700px) {
    align-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const PriceDiv = styled.div`
  padding: 0.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.2rem;
  }

  box-shadow: 0px 15px 10px -15px;
`;

const FinalPrice = styled.div`
  padding: 0.5rem;
  text-align: center;
  margin: 1rem;
  font-weight: 550;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 1.2rem;
  }
  box-shadow: 0px 15px 10px -15px;
`;
const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddButton = styled.button`
  color: green;
  border: none;
  background: none;
  margin: 0.5rem;
  border: 1px solid ${COLORS.primary};
  border-radius: 4px;
  &:hover {
    transition: all 0.3s ease-out;
    border: 1px solid green;
  }
`;
const RemoveButton = styled.button`
  color: red;
  border: none;
  background: none;
  margin: 0.5rem;
  border: 1px solid ${COLORS.primary};
  border-radius: 4px;
  &:hover {
    transition: all 0.2s ease-out;
    border: 1px solid red;
  }
`;
const CheckoutButton = styled.button`
  width: 90%;
  margin: 1rem;
  font-size: 1rem;
  border-radius: 0.4rem;
  padding: 0.6rem 2.5rem;
  background: ${COLORS.primary};
  color: ${COLORS.secondary};
  border: 1px solid ${COLORS.primary};
  &:hover {
    background: ${COLORS.secondary};
    color: ${COLORS.primary};
    transition: all 0.3s ease-in-out;
  }
`;

const Terms = styled.div`
  margin: 1rem;
  font-size: 1rem;
`;
const Div1 = styled.div`
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);

    transform: translateY(-0.2rem);
  }
`;
const Div2 = styled.div`
  padding: 0.4rem;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);
  }
`;

const WrapperDiv = styled.div`
  margin: 0.3rem 0;
  box-shadow: 0px 15px 10px -15px;
`;
const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  border-radius: 0.4rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);

    transform: translateY(-0.2rem);
  }
`;

const Input = styled.input`
  width: 70%;
  height: 1.8rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
  border: none;
  background: ${COLORS.secondary};
`;
const Input1 = styled.input`
  width: 30%;
  height: 1.8rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
  border: none;
  background: ${COLORS.secondary};
`;
export default Checkout;
