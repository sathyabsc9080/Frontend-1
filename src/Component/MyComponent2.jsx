
import React from "react";
import useFetch from "./Usefetch";

function MyComponent2() { 
const { data, loading, error } = 
useFetch('https://api.example2.com/data'); 
if (loading) return <div>Loading...</div>; 
if (error) return <div>Error: {error.message}</div>; 
return ( 
<div> 
<pre>{JSON.stringify(data, null, 2)}</pre> 
</div> 
); 
}
export default MyComponent2;