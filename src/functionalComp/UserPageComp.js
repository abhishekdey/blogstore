import { useAuth } from './ProvideAuth.component';

export default function UserPage() {
  console.log('sdskdsk');
  const auth = useAuth();
  const details = auth.getUserDetails();
 
  return (
    <ul>
      {
        details.map((data) => {
          return (<li key={data.id} > {data.username}</li>)
        })
      }
    </ul>
  )
};