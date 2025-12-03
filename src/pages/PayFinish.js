import imgFinishPay from '../assets/finishPay.webp';
import Header from '../components/Header';


import { Helmet } from "react-helmet-async";

function PayFinish(){
    // function redirectToYooMoney() {
    // localStorage.setItem('paymentInitiated', 'true');
    // window.location.href = 'https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727&';
    // }

    return(
        <>
        <Helmet>
            <title>Конструктор заключений по смэ - Завершение оплаты</title>
            <meta
            name="description"
            content="Страница завершения оплаты в конструкторе заключений по судебно-медицинской экспертизе (смэ)."
            />
            <meta name="robots" content="noindex" />
        </Helmet>
        <Header/>
            <div className='finishPay'>
                <h2>Сформированный документ будет автоматически загружен на Ваш компьютер после завершения платежа и нажатия кнопки «Вернуться на сайт», как показано на изображении ниже:</h2>
                
                    <form method="POST" action="https://yoomoney.ru/quickpay/confirm">
                        <input type="hidden" name="receiver" value="4100118762229362"/>
                        {/* <input type="hidden" name="label" value="$order_id"/> */}
                        <input type="hidden" name="quickpay-form" value="button"/>
                        <input type="hidden" name="sum" value="300.00" data-type="number"/>
                        {/* <input type="hidden" name="sum" value="2.00" data-type="number"/> */}
                        <input type="hidden" name="successURL" value="https://constructor-sme.ru/homeeDublee" data-type="number"/>
                        {/* <input type="hidden" name="successURL" value="http://localhost:3000/homeeDublee" data-type="number"/> */}
                        {/* <label><input type="radio" name="paymentType" value="PC"/>Кошелек ЮMoney</label>
                        <label><input type="radio" name="paymentType" value="AC"/>Банковской картой</label> */}
                        {/* <input type="submit" value="Перевести 300 руб"/> */}
                        <input
                            type="submit"
                            value="Перевести 300 руб"
                            style={{
                            backgroundColor: '#6f00ff',
                            color: 'white',
                            border: 'none',
                            padding: '15px 30px',
                            fontSize: '18px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',   
                            marginTop: '20px',  
                            // marginBottom: '40px',
                            }}
                            onMouseOver={e => e.target.style.backgroundColor = '#820592'}
                            onMouseOut={e => e.target.style.backgroundColor = '#6f00ff'}
                        />
                    </form>
                {/* Готовые кнопки оплаты: */}
                    {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=146SFPKJ8JJ.240725&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
                    {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=146VU7AUQSS.240725&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​ */}
                    {/* <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=1485DMQ8H32.240727&" width="330" height="50" frameBorder="0" allowtransparency="true" scrolling="no"></iframe>​   */}
                
                {/* <h2>После завершения платежа, для загрузки сформированного документа <span className='red'>обязательно!!! </span> нажмите кнопку «Вернуться на сайт», как показано на изображении ниже</h2>
                <img src={imgFinishPay} alt="взнос" /> */}
                
                {/* <h2>Сформированный документ будет автоматически загружен на Ваш компьютер после завершения платежа и нажатия кнопки «Вернуться на сайт», как показано на изображении ниже:</h2> */}
                <img src={imgFinishPay} alt="взнос" />               
            </div>
        </>
    )
}
export default PayFinish;