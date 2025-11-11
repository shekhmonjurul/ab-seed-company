import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Container from '../container/Container';
export default function Fotter() {
  return (
    <section className="bg-[#0B0B0B]">
      <Container>
        <div className=" mobile:flex computer:flex tablet:flex laptop:flex justify-around mobile:flex-wrap tablet:flex-wrap laptop:flex-row computer:flex-row text-left">
          <div className="my-10">
            <h1>
              AB Seed Company হচ্ছে বাংলাদেশ সরকার অনুমোদিত একটি বিশ্বস্ত
              প্রতিষ্ঠান।
            </h1>
            <p className="my-4">
              লাইসেন্স: SW/MOA56953 TIN:524714910220 TRAD/DNCC/042705/2024
            </p>
          </div>
          <div className="my-10">
            <address>
              অফিসের ঠিকানা-
              <p className="mt-5">
                <LocationOnIcon /> ১৮/৬, ব্লক-সি, মেইন রোড, মোহাম্মদিয়া হাউজিং
                লিমিটেড, মোহাম্মদপুর, ঢাকা ১২০৭
              </p>
              <p>
                <LocalPhoneIcon />
                09647101501
              </p>
              <p>ab.seed.com@gmail.com</p>
            </address>
          </div>
        </div>
      </Container>
    </section>
  );
}
