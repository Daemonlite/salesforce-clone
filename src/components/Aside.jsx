const Aside = () => {
    return(
        <div>
        <div>
            <h1 className="aside-head">Learn how Salesforce products help you lower costs and save time.</h1>
        </div>
        <br/>
        <div className="aside-images">
        <div className="aside-img-1">
            <img src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2022/11/php-products-small-business.jpg?resize=300,300" alt="1" width='200' />
            <div className="aside-body">
        <p className="rsp">Small Business</p>
                <p className="kol">Sell smarter and provide support faster in a single app.</p>
            <div >
                <button className='btn-outline'>watch demos</button>

                <p className="lin">learn more</p>
            </div>
       </div>
            </div>

            <div className="aside-img-2">
                <img src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2022/11/php-products-sales.jpg?resize=300,300" alt="1" width='200' />
                <p className="rsp">Sales</p>
                <p className="kol">Close more deals and speed up growth with the #1 CRM</p>
            <div >
                <button className='btn-outline'>watch demos</button>

                <p className="lin">learn more</p>
            </div>
            </div>
           
            
            

            <div className="aside-img-3">
                <img src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2022/11/php-products-service.jpg?resize=300,300" alt="1" width='200' />
                <p className="rsp">Service</p>
                <p className="kol">Spend less on scaling service customers love</p>
            <div >
                <button className='btn-outline'>watch demos</button>
                <p className="lin">learn more</p>
            </div>
            <br />  
    
            </div>
           <div className="aside-img-4">
                <img src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2022/11/php-products-all-products.jpg?resize=300,300" alt="1" width='200' />
                <p className="rsp">See all prodcts</p>
                <p className="koli">Discover how our Customer 360 offerings deliver success now</p>
            <div >
                <button className='btn-outline'>watch demos</button>
                <p className="lin">learn more</p>
            </div>
            </div>
          </div>  
        </div>

        



    )
}

export default Aside