// Solar Data

export default function SolarData({currentDate}) {
	const randomNum = Math.floor(Math.random() * 6);
	return (
        <div>
            <h1 className="text-slate-950">awesun sunbers</h1>
            <p>{randomNum}GW</p>
            <p>Current date: {currentDate}</p>
        </div>
	);
}