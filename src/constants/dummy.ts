import { MyPageBoxButtonListItemProps } from '@/pages/my/components/MyPageBoxButtonListItem';
import { IMyPageInfoListItem } from '@/pages/my/components/MyPageInfoList';
import { IBeer, ICountry, IFlavor, IMember, IReview } from '@/types';
import { ILevel, IRequestBeer, REQUEST_BEER_STATUS } from '@/types-old';

export const MOCK_USER: IMember = {
  email: 'beerair.official@gmail.com',
  id: 'c4328f0675834f8687b17f0718146fa9',
  levelImage: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/MEMBER/LEVEL/5.png',
  nickname: '맥주아저씨',
  profileUrl: 'https://picsum.photos/200/300',
  tier: 5,
};

export const MOCK_BEER: IBeer = {
  id: 1,
  country: {
    id: 1,
    korName: '대한민국',
    engName: 'korea',
    backgroundImageUrl:
      'https://beerair-service.s3.ap-northeast-2.amazonaws.com/COUNTRY/background/korea.png',
    imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/COUNTRY/korea.png',
  },
  type: {
    id: 3,
    korName: 'IPA',
    engName: 'IPA',
    content: '탄산이 비교적 약하고 강렬한 홉향과 강하고 텁텁한 쓴 맛이 나는 맥주',
    imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/BEER/TYPE/ipa.png',
  },
  myReview: undefined,
  korName: '빅슬라이스 IPA',
  engName: 'Big Slice Ipa',
  imageUrl:
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVEhgVFRUVGBgYGBoZGRkaGBgZGhgYGhoaGhoZGBgcIS4lHB4rIRgcJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs2NjQ2NDQ0NDQ0MT8xNDQ0NjQ0PTQ0NDQ0NDE0NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NP/AABEIATEApQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xABMEAACAQIDAwcHBwoEBAcAAAABAgADEQQSIQUxQQYHIlFhcYETMkJykbHwMzRSYoKhwRQjJHODkrLR0uEVU6LxNUPC4hYlVGN0o7P/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIEA//EACgRAAICAgEEAgIBBQAAAAAAAAABAhEDMSESMkFRYZEUcRMEIoGx8P/aAAwDAQACEQMRAD8A7NERAEREApErEAREQBERAEREASkrEApErEASkrEApKxEAREQBERAKSsRAERLNeuiLmdlUdbEAe0wC9E1Z25h+FQHuv756O2KVvOXxYCKBsomqO3cON9WmO9xMTFcq8Mgv5Sme51gizfxIXV5wcOvBDr/AJg9u6WxzjYf6I/fH8oFonMSFpzg0D6B8GUy8OXmH4rUHdlP4wLJbKyNYbltgmNjVKH6ysB7RcffJBQrI6hkYMpFwwIII7CIJLspKxAKRKxAKRKxAEREAREQCkiHONRzYZDnKZXJ03sAjmwPA6b5L5qaTiq5qb1W6JcbzfpvY9qhR3HrkMhnIdn7JxDnzMQ401AfL7dFk02PsJlsWwd+1xTv/qN5K/8AEkuQMzW35bW004kaXl5cYCLhW8SPwM4/xW+Wzj/ErttmOMOFU2w6L1/JjxJE0OOwJc6eRH2190k2IqhlIseG49u6aauqktYaDSwbc2mWwI36f6eGpkyxp7JkkyO4jYDsPOob/wDMX+U1WJ5IVjuNDgflE3HX8ZLL5iQcw6I1uLfnDqMwXXdqeHjPP5VcE6jMDa5N1NMggC40PR3cJRYYrRXoRCG5B4oi6ojA7iHQj23mBi+RGOQ6Ydj2oyH3G86zg8ZkTIVJsxUHcD/pA7dJc/xVbXyPa+W4ynW9raeO/ql1BLTLKC9nC62ysTSPTp10HWyvb2kWncOQ2HCYCkobNfM19292NvCVXalN7ecM1rXAsbi+8E9R9hmRs8rTcqAAtQ3006drfeq+1e2Wja8nSKo3URKToWKxEQBERAEREAREpANTyi2iKFAtezN0VPVoSzeChj4SHJy4QKEp0OiFyjO9jYC25QffMrnNc2ojrTEn2UjOZYRtZnyzknwZ805RfB1DAbYLkHLRXvztbjxaSPC11tqaY9VbTmmzHItJJQxBtOCzyT5OMckr5JHitqU1XQ5h2KCJG8dyjZSQpYDqCU/xExtoVSwK6jwO6+6/bukex7LmOVcq3Nl1NvE7+vxlJZpS8lnkkzc1OVNW3pfuUv6ZjnlZiOB/0Uv6ZHHOm4fumeAfi0qpy9sdT9kiHKvEDinjSp/gJ5blfiLWKUSDYkGkLEjdexmhv8WlsmXU5ex1S9m6flc17vh6JO+6+UQ+0PM1OXyOuR6LJus6vmKkaq1mA3EA7+Eh1aYFTfOsZSfktCcvZ9F7Ixwr0VqC1yLMBwYGzD2gzPkX5AfNW/XVPeJKJqi7RqEREsBERAEREASkrEA5/wA5i3fDjrXED205zPCcJ07nK+Uwva1Qe1VH4zmeDXQNcb7W47r37pkzbMufZJdmjdJCiG3V1d/dI/szcJv8PWUnJmGYC9uPD+Y9sxt8nCJaxa6f3kdxg1095kkxm7/aRzGk3uM3eLSqfJZbNa7Ds/eM8Kfi5ntwepvYJRQfrS6L0z0B8XlthLqj40nhoTKmHWEwGGs2FfSYSrdwO0D752gy0Tt/IMforfrqn8Uk8i/IE/oh/XVP4pKJuj2o1oRESxIiIgCIiAIiIBAecn5XB/rGHtNOcywg3eE6Zzlm1TB/rT/FTnNMOTm14G3s0mPNtmbNskuzjukhp2sui3W9jYX6WpueMjezzJJg8SUGgBvbfruv/OYm+ThGrLOMIt/aRrahvTZeoFha++2o8d/h2yU43HtYjKg8PuvfdI1tPFsxBOUFTcFdNdNfuEhbOsXFO0zU4/KiBM1nIDvYtclmtvubgE31ve2/UWuDoqFv1HvPAHwN+89k9h16Tt0y/EkHXdkI3gDfxFieJ08UcQVBHRN999fj+86N8HebVVeyqkfAlGMvjGtcHKlxYg27+o9plitVLWvbQW7+/t1hGeSXhmJXmLhheqg63X+ITJrmWMD8tT9dP4hOsBHZ2bm8N8ED/wC4/vkqkS5tvmC+u34SWTfHSNaKxESxIiIgFJWIgCIiAQPnIoZ2w2tsrO/flNPT2mc7Wrg1ds1SqTmNwq8b7gSJ0XnFqZXwvUzVE/eCBf8AVlka5JckMPiKuJNfOAhRkyvlGWoHLX06xbwmScerJTYcYtXVmNg9q4FbWGIP7uv3ibVNv4QDSnW9q/1SRU+b7Z620qa7r1Dr3WnvD8jcF5R1yMQoS35x+Oa+49gj8aJz6fhETxPKLC/5FU/at/1TTYnb+EJ+b1P3z/VJxjtkbHQsjlQy3BU1agIPUelPOwORuAqYSnWqUizMgdm8pU13m9g1vZIX9NBkqPwvo50228N/6d/3z/VKrtnDccO+n1z/AFSfY/m9wGIoF8GcjEEqyu1RGI9FgxOnDSxmPyH5HYOtglqYijmqZqisc7jzKjLaysBplk/jR/5k18L6Icu2MLb5Cp++f6pU7Vwh/wCTVH2v+6TrG8gsBiKDNhCUcZgrK7Oudd6MrE210O4znvJfZIxGOp4eopyl2zgEg2RWLC41Gq2vI/Hj8/Yf6X0VfHYM+hWHs/mZawb4c1UKNUzBgQGtYkG9r27JJOcjkph8JTpPh0ZQzsj3d39G6+cTbcZENgYcvWH1fedB7z7IlijBN2y0Um6pHa+b+jkwYW97O2veFP4yTyMcgaufCFhuNV7d1xb7rSTzTDtQ/RWIiXAiIgCJSIBWIiAc353icmHINiGcg9RAQgyJ8oalQ4bOjOiuAaiKSAb3BDW35HzL7ZLOd4fm6HfU9ySO4eorriqL62DVFHWjqM4+yxVvtmZM1qXUvBEXy0/JM+XjldnUyCQQ1KxFwQbcCN0uc3OLepRqM7s5DKoLG5sFuBfxMtcvv+G0/WpfwxzX/IVf1g/gE0LZF/3Gr5b8liorYvyoILBvJ5OshfOzfhJXyZH/AJZR/wDjj+EznvK38ofFV0TyzJnPRXOy20PmjSdG5JuF2fhydAKKk9gAhBdzo03N1gHwuAZsRdM9RquVtCi5VAzDgTlvbtE2HIeuHwOcbnqYhh3Gs9pZ5xcJVqYBzRZhl6bqvpoPOHs18J45siBsukeF6p/+15K3RPkscgsBUoUsTVqgotSs7qraHKtxmI4X9wE0HNzSWrtLFYgeaobKeF6j6H2IfbJfy6oVKmAqeRYggZiB6SDzh7Jo+a3CqmAq1WNlqO2u6yIoTf35pWuR5SMvnCUYjZLVFscpRx2WbK3vM5tsqgaeHdwOkVJHewIX2C7+BnXa2z6LbOq4ei2dPJ1FHSzHMbtbN13M5Vj64zJTXcKT1W7C9Jwi+CEn7YnHNbaXjf0XTSTZ0rm0/wCHr67fhJbInza/MF9dvwksmiGkUWisREsSIiIAiUiAViUiAc553vk6HrP7kkFxGIZKudBdgiacGV6Kq6nvDHxtJ1zvfJ4f1qnuSQPEr0143pUv/wA0EyZXUrOGR07J7y32vh6mCSklVHcGmSqm5AC6k23TB5H8pKeEpOjo7FnzDLa1soG8nslnkm6NTfDOq7mdNAC6N8ohPEqTmHYT1TR4/BtRqMh4bj9JTuPx2y0MvVJotJulNE0xfOKuUhaDG44sB7ryPYfnAqUsMuHFBCFTJmLtcixF7WmJgMfRp0wr01cmsrMSiNamMuYDMpJvZtARvlvE7VwjA/mwuZekppUznvTyhc628mQ/SzqouLaXE6kKTfku7N5yMRSopRNOnUCLlzMWuwGgDdelh4T1sXl8+HoiimHTIGcgZzoHdnIGnDNYd00+1do4SqwVKHkl8uWdkUZnpWA016JsB0Rpe542mW21cE3lGFFkzrcqEpvY5GTIjHzBfI9wNST1C4tb9m32JzhNRo+SejnUM9jm1CMxIS2m65F+q0Ynlnh/8PfCUqVRMysFJykdNizbju1PhI7tvaFCqB5KitMipUY2FsysECk/R809EaDXrmLsnAmtVCnzR0nP1Rw8d0pKSim2+CYtt0ifc2206WGw7U67qgqMHTNcAhhkIvuHmg/akJq08uIxAzZgoqgNe91vkQ39UqJtuVGJAC4ZfRs9W30rfm6f2QcxHWy9U0GDFhVtwp++pTH4zipuSVkZGlLpXg7DzbfMF9d/wkskS5tfmC+u/wCEls1w0i60ViIliRERAEREASkrEA5xzvfJ4f1n9yyJ7Owa1qlNSGP6OrdFlXUdBblgbC+m7iO+SvneP5vDj61T3J/ORfk85FWi9gVGHbOSfNQVKiu24jcdx3gkab5mmrZnybGCZ1KOhs6EOh+sOB7DqD2GSTbWGXE4ZcRSWxAJy8VI0qUyOsEXHX4yO4UC5sbgE2PZffNzsfaK0nN2HkqjKHOv5upoFqdgsbHst1TKrultaK4ZpNxemaPE7OFWia9Aeb8pTG9Da+ZOtDa4HDUcJGMQff8AdJ1tim2BxXlUW9NyVdOBB1ZOz6SngR2TS8o9mISKlI3SoM6Nwdeo9TA6EcCJqhO1fj/R2cK/ZFCZcSeSjZstjfqki2Fs9EzVqp6FMZnb+FEvvdjoPE7hLt0Qo2WDgPI0hUqjpvpSp7+wu46huA4k9hEkWzqK4LCmq4Be4sp9OqfMT1V3nsB65ibDoPi8ScTUAABtTX0EC7rX9FBrfruZZ2vtAYioCl/JU7pS+tfz6pHWxHgAJlnLqdPS38s6NqEb8vRrCSTmcli75nbi7Mbse/XdPVWmqeXyhwuRCA9swD1KbC9uzxnukmaoi9bqLdLiw+jr7Neqe9ptd8SfrU03k7juBO/zN8mPPJmjzydQ5tB+gjT028d0l8h/Nk18AOx29ymTCbYdqNK0ViIliRERAEREAREpAOc87/yeH9Z/csiWw0Uvhc4UoVqKwbzbK7sb9nSHXJbzv/J4f1n9yyE4B7UKVT/KxJB9V1Rx/A0zz7jPk7jaugWs4UqVztYrusSSAPC02DBXzXVRnADACwOlt0w8Y+as7gHKWIDWAV8vRJS2mXTrJ6yTMqlu33mOfDZmezKwrDEUmwdYkui3Rjveku6x+mn3juMjOzcSKNR8HiTamzdF/wDKqHRai/UYWDDq14GbTGU2uroxWojB0e/mkcCOIPGY3KHDrjMOMTTXLUQlKiD0HGrJ6p1ZT3idcc6fw9m3HLrjXlGCNjVfyk0CoDjefRCb8+b6Ntb/AIy1j6wxNRMNhz+YpknP9Ntz1m9yjq75hNymrHCfk29j0PKemaXCn179L9Wk3uy6a4HDeVcBqzm1NDrmca6/US9z1nSdsj6VS2y6V8vSMnbFYUqYwdPQso8sR6FM6rSv9J97dmnGaVhwhFOpZizsSzsTqzE3JJ755Zpl40jLlm5SsYOlnqolibngbbgTe9xutffLeMtlrkbjXpqNS24VeJJuNOszN2ZhUYVHqXyIo1BAYNmBBUnS9h1+kOM12IuMKhO+pWqP3hFVAfazztFcExXB1fmw+Y/tG9yyYyHc2HzD9o/uWTGa49qNMdCVlJWWJKRKxAEREAREQDnHO/8AJUPWf3LIXybTOlegPOennQdb0jmyjvUuJNOd/wCTw/rP7lnPdk4pqVVKi70YN3gbx4i48ZmyOpGfJ3Ey2VROJw2VC2enlCpcBQAtg24m7ABdLC4vbQmW6e74+BMmogw1dMTSGajWGdeHnasnYQdR3cbGbXGYNa6mtSsGuCy9LpAquuo0a5tpe9xxvOM49S42jlKN/sj9c6TUflbYer5VQWRhlrIPTTrHU67weztm5xVMqSrAqw3g3FvD8ZpsWBY663FhbeLG9+r+/ZOMX0siLcXaMkbJwSP+V/lFI0vPBD9K/UtLfn4W4GarEYpq9Q1XGXTKicKdMeao7eJPE3mIcKgbMFXN8dl5kU50lJVwd55XJUXhPJUnQC5Mu0kLeaCbC5tuA4kngO0zd08NTwoLu16oYDKBfKRZiFzAakEdO/E2GhvWMbOSjZqNp2pUxRVem2j6m+e4NgoNiDewbW4J11IGByjUJUSgP+RTRG9c3eof3nt4Td7Ipks+Or6pS1UEnp1T5iLfgCQfZ2yJ4iozuzsbszFmPaSSfvM7Jl/B2Tmv+YftG9yyYyHc1/zH9o3uWTGa49qNEdFYiJYkREQBEpKwBERAOc873yVD1n9yzm2HnSed75Kh6z+5ZzXDTJm2zPl2TjkvtFMhw9fWk50P0H678Bf2HvM2lfBV8I+ZDdDazgAqw4Bxw/vpIfgm0kr2Rt16ShWGdN2UnUD6p6uw6Tgpp8S49M5xknw/sy02nSqLlrAbxbOCygalyHHSUkk91hNWNi0KxYrUKdNUUA5gLqmYjMAWXM7WJI83jNw+HwOI8xzRc+ibKL9x0PgZqcfyMqnVKlNxwuGX3XE6U3tJ/KLpN/Jh/wDhZSVLVaqhs2rUsoBD+TsxL2BPnAcRMfBYDCrTR3qktqWpk5dFZ0IFulqQthv0aeTyPxW781359P4Zm4bkXUAvVrU0HEi5+9soivUSafotVdq0UpmmiB1ZQrZkCCy7mJXpMx3m9rEsAbS3srYVTEHytVilIAZqjaFlUW6N+wDpHTvmzQbOw2uY4hxuGjKD4dAeNzNLtvb9XE6NZEG5FvbszH0j93ZKtry/8INJb+izym2qtTLSojJQpaIv0jxc/fa/WTxkXbfNhWmvbfEW27K3bs7LzX/Mf2je5ZMZDubAfoHfUb3LJjN0NI0rRWIiWJEREAREQCkSsQDnHO+fzeH9d/cs5phzOlc8HyeH9Z/cs5lQMyZtsz5dm/wZm1QnxHaD94mlwbbptEaY5Gc91W7/AMDw065rK9d08x3X1WK+4zPqtNXiWF9RcdWg3dvfIjssi2dqV93l61v1jfzltqjOekzN2s1/f1THZySL8BbcNQOv3S4h+LDx/lOrbL2ZSN8Xnhm+Lwp0/wBp4YyiRUs1zpMBzrMuq2nXMJzrOsC0TtPNgf0D7bfhJjIXzXv+hZbHRyb20N+o8fN+8SaTfDSNS0IlYliSkSsQBERAEREA5tzwfJ4f1n9yzmmEcC9wToQLW0PA6zpnO+pNPDAby7gdpIWcxCFWKsCGUlSDoQQbEEdcy5ds4Zdm3whm0ptNPhTpNlTbSY5IzMu1Tp/aarFfGkz6jfGvfNZij8a98iKJRin406tTPafGniZYJ+Ne8y5Tb41751aLoy0PxaeWM8qZRidQRax9vaJWiCzWmC2+ZlWYTb51gWidr5rvmH22/CTKQvmtH6D9tuPdwk0m2GkaloSsRLEiIiAIlJWAIiUgED5ylUvhc2XKDVJzAEC1O4NjobGx8JzTa+Ty10bOCi3fg7gZXdewlT163nRudCqEbCMWKAVHOYbxYKf7W7ZzXa+JZ6xdqgqCwCsAq9G2a2VQLWLEHTfeZ8nk45TIwb2II4Hv+4zPQ2HCedhYBKisXcpZlUDo65r33nfe3Z2zb0djKUD+WsCpa+W4AF76g+MyvG3oz02amo/xea3Et8XkmfYVzZaynQG+XgVJ3X7JrKuxwUz+WQdHNlIsbkCwuSBx3xHHJeCVFkfJ+Lz2jfF/GbUbAYqGNVQGAINmsMyhh92nraStHYTG4Z7EEgADNfzbG4O4hpfpZbpZr1b41lGb41myr7JCX/OE2BPmNwF+F9OF+ztmNi8LTVLrUzHS262pbgLn0ffK9DIpmBUMwmOs2uNp01S6OWbquN1z2S1iKtO483juHmk26gL8Z0iqLxidb5rfmP7RvcJNJCOak/oJ/WN7hJvNcdI0LRWJSJYkrERAEREAREQDmXPL8nhvWqe5Jy+kTuubdU7PzkcnqmKoo1IFmpFjk4srAXKjiwyjTjrOR0tnPmKjLcGxBJUg9RBGhnCcJN2jhkTbLlCZ6sbbz7funmlsfEAaUwe5l/EzMTZGKI0oE9z0z/1zPLHP0Z3GXow3J4X/ANpiVK7gWzOBawsTpxtv3Ta1Nh4u3zap4ZT7mmDiNjYkb8PVH2DIjGfpkpS9GpJPxae0Yjdcfd7pebZ1f/Kf920svhKo9Bh4D+c6dMvRdJl0PfeT7Z4LDrlsYer9A+1f5z2uEq9Q17RH8cvQ6WeKjCYpbWZp2e/EqPGZOzeTlbEPlpKXbjlHRXtZtyjvl44pF4xZ1TmnYHBMOqob+wH8ZOpoeSOw/wAjwi0SwZrlnYbix3gdgAA8JvZ3iqVHdFYiUliSsREAREQBERAKSDc4fJw1kGIp5Q6Czg2GdOFj9IcOu/dJwTaa/aFA1Vy2098lEM5BszPexuO82kz2bhMwGYKftf3m5TYCD0R7JkpsZLWKr7BLWRRgf4Wn0T7Zr8bs8Dg1pvX2DS+ivgJhVeTqHr9pkJkNEQxdC01FdO6Tx+TCHgfaZYbklTPoCTZNHPnUdfumNUcfS+8TpI5I0/oD2CX6XJdB6A9kCjlVLDM7qiA3YgAm4UX4k9U7pya2OuFwyUlIY2u7/TY7z3cB2ATVUuT6AghRJDhQVUKb6bu6QwkZcSgMrKlhERAESkQCsREAREQChEplnqIB5tK2lYgHnLKZBPcQC35MR5MS5EAt+TErkE9xAPOWMs9RAKASsRAEREApErEAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP//Z',
  content: '열대 과일향과 몰트의 고소함',
  alcohol: 5.4,
  price: 3500,
  volume: 500,
  liked: false,
};

export const requestBeer: IRequestBeer = {
  beerId: 1,
  beerImageUrls: [],
  beerName: '하이네켄 벚꽃 맥주',
  createdAt: '2022-06-21T02:55:12.151Z',
  requestCompletedAt: '2022-06-21T02:55:12.151Z',
  status: REQUEST_BEER_STATUS.APPROVED,
};

export const level: ILevel = {
  id: 1,
  tier: 1,
  imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
  req: 5,
};

export const levels: ILevel[] = [
  {
    id: 1,
    tier: 1,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 0,
  },
  {
    id: 2,
    tier: 2,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 1,
  },
  {
    id: 3,
    tier: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 5,
  },
  {
    id: 4,
    tier: 4,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 12,
  },
  {
    id: 5,
    tier: 5,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 20,
  },
];

export const MOCK_REVIEW: IReview = {
  id: 'sfs',
  content: '맛이 좋아요(한줄평)',
  feelStatus: 3,
  imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/samples/beer_background.png',
  member: {
    email: 'beerair.official@gmail.com',
    id: 'c4328f0675834f8687b17f0718146fa9',
    levelImage: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/MEMBER/LEVEL/5.png',
    nickname: '맥주아저씨',
    profileUrl: 'https://picsum.photos/200/300',
    tier: 5,
  },
  createdAt: '2022-06-11T02:55:12.151Z',
  departuresCountry: {
    id: 1,
    korName: '대한민국',
    engName: 'korea',
    backgroundImageUrl:
      'https://beerair-service.s3.ap-northeast-2.amazonaws.com/COUNTRY/background/korea.png',
    imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/COUNTRY/korea.png',
  },
  arrivalCountry: {
    id: 1,
    korName: '대한민국',
    engName: 'korea',
    backgroundImageUrl:
      'https://beerair-service.s3.ap-northeast-2.amazonaws.com/COUNTRY/background/korea.png',
    imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/COUNTRY/korea.png',
  },
  // isPublic: true,
  flavors: [
    {
      id: 1,
      content: '탄 맛이나요',
    },
    {
      id: 2,
      content: '목넘김이 부드러워요',
    },
    {
      id: 3,
      content: '쓴 맛이 나요',
    },
  ],
  beer: { ...MOCK_BEER },
};

export const MYPAGE_BOX_BUTTON_LIST_DATA: MyPageBoxButtonListItemProps[] = [
  {
    iconName: 'Heart',
    text: '내가 반한 맥주',
    count: 3,
    unit: '개',
    href: '/beer/recommend-and-liked?tab="liked"',
  },
  {
    iconName: 'PlusCircle',
    text: '요청한 맥주 현황',
    count: 3,
    unit: '개',
    href: '/beer/requests',
  },
  {
    iconName: 'ThreeDot',
    text: '기타',
    href: '/my/etc',
  },
];

export const MYPAGE_INFO_LIST_DATA: IMyPageInfoListItem[] = [
  { count: 1, unit: '캔', title: '마신 맥주' },
  { count: 2, unit: '개', title: '기록한 티켓' },
  { count: 3, unit: '개국', title: '여행한 나라' },
];

export const MOCK_FLAVORS: IFlavor[] = [
  {
    id: 1,
    content: '단 맛이나요',
  },
  {
    id: 2,
    content: '목넘김이 부드러워요',
  },
  {
    id: 3,
    content: '쓴 맛이 나요',
  },
  {
    id: 4,
    content: '쓴 맛이 나요',
  },
  {
    id: 5,
    content: '쓴 맛이 나요',
  },
];

export const MOCK_COUNTRY: ICountry = {
  id: 1,
  korName: '대한민국',
  engName: 'korea',
  backgroundImageUrl:
    'https://beerair-service.s3.ap-northeast-2.amazonaws.com/COUNTRY/background/korea.png',
  imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/COUNTRY/korea.png',
};
