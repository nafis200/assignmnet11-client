const Pending = () => {
  const handleSubmut = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.pass.value;
    console.log(email, password);
  };
  return (
    <div>
    
    </div>
  );
};

export default Pending;
