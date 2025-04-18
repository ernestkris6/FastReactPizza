import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';


function Home() { 
    const username = useSelector(state => state.user.username);

    return (
      <div className='my-10 px-4 text-center'>
        <h1 className="font-semibold text-xl mb-8 md:text-3xl">
          The best pizza.
          <br />
          <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
        </h1>
        {username === '' ? <CreateUser /> : <Button to='/menu' type='primary'>Continue ordering, {username}</Button>}  
      </div>
    );
  }
  
  export default Home;


  








































//   <div className='relative'>
//   <input className='mt-8 w-[50%] rounded-lg py-2' type='text' placeholder='Enter name' />
//   <button className='absolute border-none top-[55%] left-[50%] items-center text-sm bg-blue-700 rounded-full px-1 py- '>Search here</button>
// </div>



// <div className='relative'>
// <input 
// type={`${showPassword ? 'text' : 'password'}`} placeholder='**********'
// />
// {/*border: none;
// background: transparent;
// position: absolute;
// top: 50%;
// right: 1rem;
// translate: 0 50%;*/}
// <button className='absolute border-none inset-0 left-[370px] items-center bg-transparent'
//         onClick={handleShow}>
//       {showPassword ? (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//       >
//         <path
//           fill="currentColor"
//           d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
//         ></path>
//       </svg>
//     ) : (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//       >
//         <path
//           fill="currentColor"
//           d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
//         ></path>
//       </svg>
//     )}</button>
    
// </div>
