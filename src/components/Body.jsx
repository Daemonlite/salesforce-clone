import React from 'react'

function Body() {
    const styles= {
        borderRadius:'15px',

    }
  return (
    <div>
        <div className="header">
            <h1 className='head'>What's new at salesforce?</h1>
        </div>

    <div className="body-images">
    <div className="img-1">
            <img src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2022/11/wp-chp-news-bar-crm-starter-pack.png?resize=768,432" width='400' height='200' alt="1" style={styles} />
            <p className="pa">CRM STARTER PACK</p>
            <p className='pr'>Easily get started with sales, service or market solutions</p>

        </div>
        <div className="img-2">
        <img src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2022/07/wp-chp-news-bar-retailer-demo.png?resize=768,432"  width='400' height='200'alt="3" style={styles} />
        <p className='pa'>REPORT</p>
        <p className="pr">Get insights from more than 2,500 small business leaders.</p>
        </div>
        <div className="img-3">
        <img src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2021/09/wp-chp-news-bar-smb-trends-report.jpg?resize=768,432" width='400' height='200' alt="2" style={styles} />
        <p className='pa'>DEMO</p>
        <p className="pr">
        Boost shopper loyalty and cut costs with the CRM for retailers.
        </p>
        </div>
    </div>
    </div>
  )
}

export default Body