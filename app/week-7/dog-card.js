export default function DogCard({dogObj, removeDogFunc}) {

    const {id, name, breed, photoUrl} = dogObj;

    return(
        <div className="max-w-sm bg-blue-300 p-2 rounded-lg">
            <div className="inline-block align-middle">
                { photoUrl && ( <img  className="max-h-28 rounded " src= {photoUrl} />)}
            </div>
            <div className="inline-block align-middle ml-3">
                <h3 className="text-xl">{name}</h3>
                <p className="text-lg">ID: {id}</p>
                <p className="text-lg">Breed: {breed}</p>
                <button
                    type="button"
                    onClick={removeDogFunc}
                    data-dog-id={id}
                    className="text-sm bg-red-700 text-white rounded px-1"
                >Remove</button>
            </div>
        </div>
    );
}