import Title from "@/components/Title";
import LinkedIn from "@/components/LinkedIn";
import "./style.css";
import Image from "next/legacy/image";
import Link from "next/link";

export default function TeamPage() {
  return (
    <>
      <div className="all">
        <Title title="Our Team" />
        <div>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-8 text-zinc-600 dark:text-zinc-500">
            Our team consists a group of passionate people who are working hard to make
            IIC TMSL a success.
          </h2>
          <p className="mt-5 flex items-center justify-center text-center text-xs sm:text-sm">
            Tip: Click on the Images to visit their{" "}
            <LinkedIn className="h-3 w-auto px-1 sm:h-4" /> Profiles
          </p>
        </div>
        <section>
          <div className="container mx-auto py-24">
            <h2 className="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Administrative Heads
            </h2>
            <div className="mx-auto -mb-10 -mt-4 flex flex-wrap sm:-m-4">
              {adminList.map((admin) => (
                <div key={admin.id} className="mx-auto mb-6 p-4 sm:mb-0 md:w-1/3">
                  <div className="mx-auto aspect-square h-56 w-56 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150  ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                    <Link
                      href={`https://www.linkedin.com/in/${admin.linkedIn}`}
                      target="_blank"
                    >
                      <Image
                        alt={admin.name}
                        className="h-56 w-56 rounded-full object-cover object-center"
                        src={admin.image}
                        width={300}
                        height={300}
                        placeholder="blur"
                        blurDataURL={admin.image}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {admin.name}
                  </h2>
                  <p className="mt-2 text-center text-base leading-relaxed text-zinc-600 dark:text-zinc-500">
                    {admin.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto py-24">
            <h2 className="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl">
              Heads and Co-Heads
            </h2>
            <div className="mx-auto -mb-10 -mt-4 flex flex-wrap sm:-m-4">
              {teamlist.map((member) => (
                <div
                  key={member.id}
                  className="mx-auto mb-6 w-full p-4 sm:mb-0 sm:w-1/4 sm:p-10"
                >
                  <Link
                    href={`https://www.linkedin.com/in/${member.linkedIn}`}
                    target="_blank"
                  >
                    <div className="mx-auto aspect-square h-48 w-48 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                      <Image
                        alt={member.name}
                        className="h-48 w-48 rounded-full object-cover object-center"
                        src={member.image}
                        width={200}
                        height={200}
                        placeholder="blur"
                        blurDataURL={member.image}
                        loading="lazy"
                      />
                    </div>
                  </Link>

                  <h2 className="mt-5 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const adminList = [
  {
    id: 1,
    name: "Ayushi Dey",
    role: "Convenor",
    image: "/images/team/admin/ayushi-dey.jpeg",
    linkedIn: "ayushi-dey-390",
  },
  {
    id: 2,
    name: "Siladitya Marik",
    role: "Co-Convenor",
    image: "/images/team/admin/siladitya-marik.jpeg",
    linkedIn: "siladitya-marik-1abb03225",
  },
  {
    id: 3,
    name: "Ankit Kumar Gorain",
    role: "Co-Convenor",
    image: "/images/team/admin/ak-gorain.jpeg",
    linkedIn: "akgorain",
  },
];

const teamlist = [
  {
    id: 1,
    name: "Arnab Mukherjee",
    role: "Co-Head of Graphics wing.",
    image: "/images/team/heads-coheads/arnab.jpg",
    linkedIn: "arnab-mukherjee-1b1b1b1b1",
  },
  {
    id: 2,
    name: "Tejodeep Mitra Roy",
    role: "Co-Head of Graphics wing.",
    image: "/images/team/heads-coheads/tejodeep.jpg",
    linkedIn: "tejodeep-mitra-roy",
  },
  {
    id: 3,
    name: "Aditya Seth",
    role: "Co-Head of Technical wing.",
    image: "/images/team/heads-coheads/aditya.jpg",
    linkedIn: "aditya-seth-270833233",
  },
  {
    id: 4,
    name: "Pratim Saha",
    role: "Head of Press wing.",
    image: "/images/team/heads-coheads/pratim.jpg",
    linkedIn: "",
  },
  {
    id: 5,
    name: "Prastab Mukhopadhyay",
    role: "Co-Head of Press wing.",
    image: "/images/team/heads-coheads/prastab.jpg",
    linkedIn: "prastab-mukhopadhyay-8b342923b",
  },
  {
    id: 6,
    name: "Rahul Das",
    role: "Co-Head of Press wing.",
    image: "/images/team/heads-coheads/rahul.jpg",
    linkedIn: "",
  },
  {
    id: 7,
    name: "Shristi Rai",
    role: "Head of PR wing.",
    image: "/images/team/heads-coheads/shrishti.jpg",
    linkedIn: "shristi-rai-03a264209",
  },
  {
    id: 8,
    name: "Soumyadeep Banerjee",
    role: "Co-Head of PR wing.",
    image: "/images/team/heads-coheads/soumyadeep.jpg",
    linkedIn: "soumyadeep-banerjee-722447237",
  },
  {
    id: 9,
    name: "Sneha Priya",
    role: "Head of Social Media wing.",
    image: "/images/team/heads-coheads/sneha.jpg",
    linkedIn: "sneha-priya-b5890a214",
  },
  {
    id: 10,
    name: "Abhipreya Ghosh",
    role: "Head of Start-up wing & Co-Head of Sponsorship wing.",
    image: "/images/team/heads-coheads/abhi.jpg",
    linkedIn: "abhipreya-ghosh-531576211",
  },
  {
    id: 11,
    name: "Rajeev Tiwari",
    role: "Head of Management wing.",
    image: "/images/team/heads-coheads/rajeev.jpg",
    linkedIn: "rajeev-tiwari-88503b143",
  },
  {
    id: 12,
    name: "Varun Fatepuria",
    role: "Co-Head of Management wing.",
    image: "/images/team/heads-coheads/varun.jpg",
    linkedIn: "varun-fatepuria-0a76aa214",
  },
  {
    id: 13,
    name: "Rohan Jha",
    role: "Co-Head of Sponshorship wing & Head of Internship wing.",
    image: "/images/team/heads-coheads/rohan.jpg",
    linkedIn: "rohan-jha-476296213",
  },
  {
    id: 14,
    name: "Shweta Sharma",
    role: "Head of Content wing.",
    image: "/images/team/heads-coheads/shweta.jpg",
    linkedIn: "shweta-sharma-b39646200",
  },
  {
    id: 15,
    name: "Sanjana Dey",
    role: "Co-Head of Content wing.",
    image: "/images/team/heads-coheads/sanjana.jpg",
    linkedIn: "sanjana-dey-b4588a202",
  },
  {
    id: 16,
    name: "Ishika Mondal",
    role: "Head of Resource wing.",
    image: "/images/team/heads-coheads/ishika.jpg",
    linkedIn: "ishikamondal",
  },
  {
    id: 17,
    name: "Sandeep Pratap",
    role: "Co-Head of Resource wing.",
    image: "/images/team/heads-coheads/sandeep.jpg",
    linkedIn: "sandeep-pratap-528003202",
  },
  {
    id: 18,
    name: "Dipannita Kundu",
    role: "Admin Head.",
    image: "/images/team/heads-coheads/dipannita.jpg",
    linkedIn: "dipannita-kundu-998b621a6",
  },
];
