const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='menu-block'>
      <h4 onClick={() => setIsActive(!isActive)}> {title} <span>{isActive ? '-' : '+'}</span></h4>
      {isActive &&
        <ul className="accordion-content">
          {content}
        </ul>
      }
    </div>
  )
}
export default Accordion;

