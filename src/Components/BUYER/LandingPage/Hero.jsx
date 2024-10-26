import "./Hero.css"
import { useNavigate } from "react-router-dom";

function Hero (){
    const navigate = useNavigate();
    return(
        <div className='div-hero'>
            <section className="hero">
                <div className="hero-content">
                    <h1>Amazing <span>Products</span>, Unbeatable <span>Prices</span> </h1>
                    <p>Explore high-quality items. Free shipping over <span className="discount">$50</span>. Find what you need!</p>
                    <button onClick={ ()=> { navigate("/shop")}} >Shop Now</button>
                </div>
                <div className="div-hero-image">
                    <img className="hero-image" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YSUyMGxhZHklMjB3ZWFyaW5nJTIwc29tZXRoaW5nJTIwb24lMjB0aGUlMjBoZWFkJTIwbGlrZSUyMGElMjBwcm9kdWN0JTIwYW5kJTIwc21pbGxpbmclMjBzb21ldGhpbmclMjByZWxhdGVkJTIwdG8lMjBmYXNoaW9ufGVufDB8fDB8fHww" alt="" />
                    {/* <img className="hero-image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESERUREBAWFRUVFRUVFRgXFRUVGBUVFxUXFhcXFRUYHSggGBonGxUXITEhJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGhAQGi0fICUrLS0tLS4tLS0vLSstLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBwQFBgj/xABHEAACAQIDBAgCBwUGAwkAAAABAgADEQQSIQUxQVEGBxMiYXGBkTKhFCNCUqKx8HKCktHhQ1NissHCFSRzCBczVGODs8Px/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQACAwEAAQQDAAAAAAAAAAECEQMhMRJRBCJBYRMycf/aAAwDAQACEQMRAD8Au2LAQkUQhCAQhCARIsICRleqqKWY2A/WkxtrVylMkaE6X5fq04jb222o4Y1GJJsMoJO9hpqfOcuTl+enXj4bm2G18H3/AKbg61iHtUQ6C+8kX3cyNdJ02ysaaq3IAIsGtuzb7D5e8rfZhrU8IamI0qVCWtc6LwvfjvPrOo6uKhahUJ41LgchbQedhOfFn+935sP2fnTrYQhPS8YhCLASEIQCEIQghFhCkhFhAIQhAIQiwEiwhCCEIQEhFhASEIQCEIQCEIQCEIQohCEDC2upamVW1zz4DifOaJNiCoqF7fVk5QRcFgdG9P68pvahuT52isQBrJeOXutY8lxmo4TpBh6jNkqLZbix3hh/O9p1Ow8MmDw+avUWnfVizBQvIEnjOL6WdOOwrFEp03ZQCua5yPwZrHWwO6VttbbNfEv2mIqtUb/EdB4Ko0UeAE5Y8cxy26Z8tyx0ujanWXs+lcIz1iP7tdP4msCPK85vFdcDf2WDA5F6hPyCj85VoqSN3nTdcnbbX6y8bX0BFJeVMst/Nr5vnNNR6VYlTmWtVB8Kr/znPEwvJo2sLZfWljKdhUK1V/xgXt4Mtvned/0e6xcFibK79hUPCoQFJ5LU0HvaefgY8NKPVoN90WecOjvS7GYIgUapycab96mf3fs+a2lw9D+n2GxtqbfU1/uMbhz/AOm3HyNj575do66EISghCLASEWEAhCEIIQiwEhFhASEWEBIQhASLEiwCEIQCEIQIcXTZqbqrFWKsFI3gkEAjxvPKB21i6rF62Iqu17ktUckHw108p6zqNYE66AnTU6chPIpfMzvly53drfdzMTb0vaaxZydzhutjaFOwZaFQD71NlY+qOAPabP8A73a1ZXT6GqNkNnFUsFY6DuFNee/hKurmZOyvhY8yB7D+suXiY3tnVqpJLMSSTck6kk6kmRMY5hImE5OgL2mLVxqjxkVYliQJJs3Zb1CFCkny8o3E1aRcWSbBZJ9IP3TbmLH8jpO1wHRJVUGuwHNRE2t0bSzFdBbcBOX+Wbd5wZa246nXU6BheTzX4/A5CBvN9f6xgqVKfxajkd/oZ1nbjZY2YMkRrEEbxr5TFoV1cXU/zEmBgWx0A6xzdcNj3vewp1jw5LVP+/35y155RzS2uqfpoWK4DEtc2+ocnXT+yY+Xw+VuUsotWEISoIQiwCJFhAIQhAIQhAIQhAIQhAbCAhAWESEBYRIQNf0ixIpYTEVC2UJQqtm32sjG9jvnlKktlA5AT0t1mVXTZeJamQGyKLk27pdQ3mcpIA43nml77hNYs5IcQZk7IbRl8j/p/KYmJsBa+sbhK2VgR5ekuU3GZdVumkFY30EmMboNTOTqk2Ps56rrTUXLEf8A6ZbWwujq0Fsi2YjvMdST/KQdCdl01oU6uUZnF7211nXrunlzyuV09vHhMZtz9TYoJ7xvFxGCULYi/CbDauPp0Ez1WCi9h4nkBxM07bYFW1qNVQftOqqPbNf5Tnp3253aHRik12UWO+04DbtAhiDf2tLqOH7t+c5zamzaVZu+uvOax5Pn1zz4fv8A1V3gejNRqS1hUCEgkAo7Ai9u8VBCjzkeYglHGV10YfPQ8RaxB8ZZ30WorItMhVC6AqGVgLd0nevn48ZX/TymExxVeCL/AJntfxy2HpOvHyXLLVcubhxwwljDklCqyMGVirKQykbwwNwR4giYdOveS3nd5HpvoftwY3CU8RpmIy1APs1F0YeXEeBE3UqHqI2ic2JwxOlkqqPG5Rj/AJPaW9NRBFiRYBCEr/H47FYjEVKeFrLmQFuzLsj2Gl1Nsra+Itceczll8unHx/f9LAhOA6PdMKucUcQNc+Rsws6G9tfIzv4wzmXhycdwuqIQhNOYhCEAhCEBkWJCFLCEIBCEIFedd20uzwC0Qda9UA/sU++fxZJQVarYePCWb157RzYynR4UqQ0/xVDmP4Qsq8rrdtTwE3PHPL1HToZtWjiwBAA8v5xKtU7hv/WghTo8TKysnoz0FfF7MbE0jestV8ik6VKaqt1BO5s2a3A7jzHHVaZBIIIINiCLEEaEEHcZ6B6qsPk2Vh+bCo5/eqMR8rTB6f8AV8mMvXw9kxFtRuWtb73J/wDF6HmOddZ457oFjc+DReNMsh9DcfhInT1MTlF99tZVGx9pV9nVKtCrQfObWpnRg97A+II4i97C02OB6csG/wCaQKmaxKt8IvbvDlrvnkzwsvT28fJj8zbE2ltWtVxJr1tAhIpqQStNR9rKPib8zH7PXF18WEqdoiZhfOwLMpAYEZdBoddNOZnbYzo/RdiGW4cXDDx1vNjsXZNGibIoFt54n1kmW3S46vV6TYxAKdhwE5FjqfOdTtSsMpAnLtvnHP13450kpVmuALkm6gC5JJ4ADeZVXStnbGO7AjNYqDwUCyj2lk7Ww5amSo1FiPMaj5zjelmB+qWpdibkEte/Mb+NiZ24Ou3m/U7s05s8xHrUkmHwlRlL5DkG8gXA8+XrHYPA1KtVaNJC7uwVFG9if1v4T1beHS1eoPBE1MTiCO6ESkDzLEuw9AqfxS5JouhXR5cBg6eHBBYXaqw+1Ub4iPDcB4KJvZqIIsSLAJXW1h2OOWrTHfFbgNSrHvDysTLFnI7Vw4+ku4FzcAftZRf10/OceaXXT0/pstZXf4Ye1MElR3ZRYu2b+v65zfYfpFSFkqXDAAcwfG/CctjMec4o07Go2pPBBzM0WM21g8LmD1DUqm9232PIW0H5zjjnlL075ccuPa0E21SzEEhQBckkAAcyeAmynnbbvT+madSnh6ZLVKZpl20ABIJKrvJ0trbfxlr9VHSL6Zs9Mx+soWo1OZygZG9Vt6gz1Y267eHKSXUu3ZQhCaZEIQgMEIkWFEIQgEIQgea+s3EF9qYo8qgQeGRVT/bOTq2Ub9TN703q/wDPYtj/AOZrAeNqjCc4KBbvP7TpHK+kSui7tTJKT5juI/KKbAWFhzPKZewNpCjiaVY0hVWnUVyrGwbKb6nz19IR6f6G4VqWAwtN1ystCmGB3g5bkHx1m4vNfsXbNHF0FxGHcMje6txVhwYcpl3Nxec3Zhbc2DhsWuTEUg9vhb4XQ80carK42l1crhqg7OoXpO+c9oqlkZb2swGp7x4D5S062JVFZ3YKiglmYgAAcSToJWHSLrTwr1Fo0kZqea5rk5VAA3qp1K6gXNt8znjuXTWGUmU23DMVpqeCkrc8BfTWYC7R7SoVoMXsO81jlvyDceO7lMDG1+1subutyItru85jbPxhpL2FB87sb5iALXG8/dXSeHVtfUxk0z6tZ84Rxa/HhIalKxMMLhctS71DUqnV2P2RwRRfQcT6TLr0rXPOTLHVa8a7FE5MoNi2gmlx+Gz0agempIvrY3Fst9R8V+7vG4TcowZzyXT1kW0HAp1BwKnhfW1hNYZXHpxzwmXbW9WOw1qVq7sLoKQSx3HtDc+YsvzlkdCuh9HB/Wgh6xBGcgCy31Ucm0Fz/pNF1SYRlwlSo39pU7p5qqqPbNmHpN7tbaDYVkxIuadwlZR91jZXHirG3kxnr1/L59907FWvrHTDwmMV1D0yGVhcEfOZYM6RksIQhEGPNQUqnYgGpkbswdxfKct/C9pSm0OtT6spTwbJUIsWarfKSe/pl3y8p5r6z9jHDbRrLay1D21P9moST7PmHpLJL6bs8YuI6bYk0ylMLTL3zuLs7ctTooA0sBOZxFdm1ZieVzu8oNIzLMZPEy5Msvahvvlg9S3SH6NtBaTm1PEgUm5Cpe9I+91/9yV6++dP0lFJkoYnCLYd4OyKVCMGHZA3GjgXBI4gayZJj+XqmE57oH0hGPwNLEaZ7ZKoHCquj+h+IeDCdBI0IQhAZFjYsKWESEBYRIsDzF1g7OqUcfiFqixNWpVXkyVHZlYeFjbzBHCc24J04T0z086H09o0MuiVkBNGpyJ3o9t6G2vLf5+ddsbKrYWq1HEUylRd4PLgyncyngRpNyueUa1lG4+0kBtoBaAiW1lZbzo50uxeAa+HqWUtd6bAMj6WGYbwfEEHTfLMwHXTQOXt8I67rlHVvZWt7XlJ4k2sY9V4+0mllrtusjp++OcUqF1wyMGAOhquDo9Qfd5Lw3nW1uIeupFje3z08b6/rSR1RIDBtvNj9I6lDKPiVbdw7tBYZWv3dw03aTvtg7RStTath6SoWOQ5gAxbKdzfaGh9jKz2Ds76RiqGHLZRVq06ZOmgZgCRfS9r28bT0WOjVNGwwoqq0qKFCpFzlAOWxO83Y3J13njOefHL3PXo4efLD/jS7GwGRc9VrsdT7Af6TD2ztBRe3jab3bWy8tytXKu+xF/QG84DEYcnEorsfrCVp34kAtu8gfeePLDKevfjy45dthserfN5zI2mBkI8P6xuzsA1MsCOM2uycF22IRCLqDmbyXW3qbD1nKd3Ubysk26/o1s76PhKNI71prm/aPeb8RMkxmDWqjU6i5ldSrDmCLEexmzYaSEifR0+V6qjYXSJ9lY+pgsU5NDN8bfZDC6VPIg94W33tutM3A9dA7U9thSKRNhka7gczmsG+XrMTru2L3aWNUbvqKthwJJpn3LD95ZU6XtrNSRm2vT2y+nOza4BTGU1J+zUYU2B5We3ynQ03DC6kEHcQbg+onkK82Oytu4nDNmw9d6f7LEA+a7j6y/J9PV0rbrw2IKuDTFKO/h2s1v7qoQD7NkPgM05fYfXJiadlxVJKw+8Pq3+QKn2E7XZ/WLsraCNhqrmkaymmUrAKGDDKQKgJUb9LkGTw3K87ssjtNt0k2Q2ExVbDOe9Scrf7y70b1UqfWapjabc0VUTpuirnEUKuBOVcwXK5uSL1VIXJx75+K+mac0TJ9jYo0sRTcVGp2dQzKbEISA2vK1/aZym41je1ldRu2mw+OqYGoe7WzAC+gr0r3t5qrD9xZfU8wirSwm1MJVoldKlCpVAfOFLVLVBnub3Q33/AGp6dmW4WESEKjixsWQLFiQgLCJCAs0vSnovhtoUuzxCai+Sotg9Mn7p5cwdDN1CB5o6Z9B8Vs9yXXPRJslZR3TfcHH2G8Dv4EzljPXtakrqVdQysLMGAIIO8EHQiVZ0w6oadS9XZzCm280XP1Z/6b70PgbjdbKJqZMXFSdVLgAcxHOQNBwmRj8HUoVHpVUKVEJVlJBKkbxcEj2mGTNsmNcxAhk2g1bSY9TF8FgWN1KbJSpjnquATQpZkG+zuwUN6DN7y8GQ8JSvUBilXGYim/xVKCsp8Kb94fjB/dl6FZm1qRye1cSGLKd4uL8udpx+ysAuJxK4xvgpkrQHgPif1PyE2/TLEl6rYOj8Tm1RvuIRqP2iPYa8psMDhVRFRRYKAB6Txcudt0+hxYSTaXsL303zbdHsEqZnA1OnoN/z/KY6YRyNFPrp+cn2ptalgcOHq3J+FVXe7byB4czHDh3us8+c+fmN5MfFYinTGao6oObMFHuZRnTnrK2g5CUH+jI1zan8ZG4XqEXHH4bSucQ9Ss2eq7VG+87Fz7sSZ7J28VunpTb21tmYnD1sNUx2Hy1EKk9tTJU/ZYa7wbH0nnhtGKEhitwWU3U2NrqeIO8GY9LDga21jkPeY+Q9hNSaZt2ljbwjVMqBmmMH1PvJ3O+Yi77xR0+KqNicN27MWqYfs6Tk72oPm7FieJVgU8mp8poXBmy2DUBp1kJ+PD1FPiaTJiV/+G3rNdVcAyRaaEkdQR4F4MsqIgNLc56y6D7fXH4KliR8RXLUH3aq6OPfUeBE8mS5P+z7tkK1fBsbdpatTHNlGVx55cp/dMxk3iuyELxJlpFFiQgOhEhAWLGxYCwiQgLOb6wOkX0HBtUQjtXPZ0f22B71uSgFvMAcZ0corrl272uM7IHuYZcg5Gq1mqH0GVfNTLIlVzjaupLtckkkk3JJNyTzMwHxf3R6mQ1WLEkxAs2wRiSdTeZNCjpIqSXadr1f9EjtDEZWuKFOzVmGhN/hpqeBNt/AAnfaD1B0IwuKp4ili8PTcim+pANnU910HO6kjwno4Vbbrn9cpFhMBTpotOnTCIgCqoAAAG4ATYUksPzmbutzpzGzOjjGo9etZWqMWyjUi54nde1hx3ToaGDRPhA89595O7gC5Nh4zAxOKqNpRX99hZR5De35ec548eOLplyZZesmvUVFLMQANSTOMxuGOLqdrUHdGlNfur/M7z/Sbs7KqOb16zP4bl/hGkyRggNBLd1mdPPPWCi/8RqIo0pLTT1yhz/nmjVZuOl9UPtDFMP791/gJT/bNROsmo5X0THon4vFjMgnSY9EWA85UTGRrvMkkfGA1t0hqDKNd5mQp0mHWIJ1OkEbDo6VNbI9RaatTxC5mNlDNhqqpc8LuVHrMU0DMayzPQ3F5ItQimwik6SRqoHCRVKt9N0qIzNn0e2s+FxFPEU/ipurjxtvXyIuPWaxooma1HsXC4paiJVpm6uqup5qwDA+xhK46uem1KnszD06xGZFZN/2UqMqfgCwnL6jppZMWNvFmkOheJCA6ESEBYRIQMXa20Fw9CrXfdTRnPjYXA8ybD1nlHb2Nao7MxuzszsebMSzH3Jl59dm2eywiYYHvVnzN/06dj83KexnnjE1LsTN4s5Fp1bArbfx/XlGsp4xFjyJYyfhBqZ6d6CbCGCwdOjYdoQHqnnUbVvbRR4KJ5q2NiFp1qdRhdUqUmI5hXBI9QJ6i/4ioTOOI0/O8XxY2NbFJTGaowUDnz8OcxcPtNqx+pWyDe7Df+yv8/aaH6I+JfMzXA4ncPBROhoKqKFXcBYTEu270yVpDee8eZ1PpwHpG4jEqu8+g1J9Iw1IzQa8YEL41v7moRzsn5Frxwxi2ubr5gj848vNf0hxnZYWvVJ+CjVb2QkSDzbisR2lSpU++7P/ABMW/wBZHeRURYW8o+86uRKp0Mao0ESsdIogKIjbxFgYELLfS/ExvZKOEkO/zkdbdYepgYtZ77pm4ZrWH6vIFpgcbx5W3GSLWUwEYVEYtW48ZG5MqG1DrEEQiKJlqM+hXYKAD+rwm62L0Lx+JopXoUC1N82U3AvlYqfmphOe4329O3gI28UGUOvFjYsB0Lxt4QHQvEmFtraIw+HrYht1Km7+ZUEgepsPWBQPW/trt9oVQDdaVqC/uXz/AIy/sJXZmbtPEM7EsbkkljzY6k+8wl3zp/Tme2+PsSbCNYa6SelVC8JqRmkSnrbmQPnPSPRjCdrgsP2zamjTvz3C3ytPONI99bfeW3uJ6twOzxTpog+wir7ACYy/DeCFcKlNbLprfzv+UTNbjM6ogtaYdajaJ40O1jWryF1I3RgCnRiRJVif6YvEzl+s/aKrsyvlNy+SmP3nF/w3nTrstD9u8rbrrw6UsPQVd71SfRUN/myxPTLxVVM6H0gDG0uPpFE25EqbxFEY28RymA6ES8WBHV58ox3A1Me0wqrcIElMlmHAXk44g7+HjIqbbvMfnHV5FRMbG4j895EYgkXSQmAPKNMcnjJVeudibPXDYejh6fw0qSIPHKoBJ8SdfWETYD1GwmHav/4poUjUt9801LfO8JhtmRYsJQsW8IQCEIQFlfddu0zS2cKY316qIf2VBqH5oo9YQlnqXx51qtcxqb4Qm/5c01EDVjw3R1JL6whNxmtx0Owy1doYVG+E4ikT4hWDW9bW9Z6mD3hCYreKKtvhlvCEjSI4SKMGOMISKQ4NBrulK9eWODYihSBP1dN2Pm7Af/XFhLGb4rmid/pHCEJphGT3o9YkIC3jjCECKqdJhNCElWJhuv6xBUJ3xYSKaYloQgKRN50L2KcZjaGHAFmcF7m31ad+p+EEesITOTUerCOUIQmVf//Z" alt="" /> */}
                </div>
            </section>
        </div>
    )
}

export default Hero;