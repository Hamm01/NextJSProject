export default function userProfilepage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Profile Page</h1>
      <br />
      <h2>Profile id is {params.id}</h2>
    </div>
  )
}
