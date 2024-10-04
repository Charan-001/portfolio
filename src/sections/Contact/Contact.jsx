import style from './ContactStyle.module.css'

function Contact() {
  return (
    <section id='contact' className={style.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="https://formspree.io/f/xdkonawk" method="post">
            <div className='formGroup'>
                <label htmlFor='name' hidden>Name</label>
                <input type="text" name='name'  id='name' placeholder='Name' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor='email' hidden>Email</label>
                <input type="text" name='email'  id='email' placeholder='Email' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor='message' hidden>Message</label>
                <textarea type="text" name='message'  id='message' placeholder='Message' required/>
            </div>
            <input type="submit" className='hover btn' value='Submit' />
        </form>
    </section>
  )
}

export default Contact