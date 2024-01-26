import create from "zustand";

type Store={
    city:string,
    id:number,
    addCity: (sehir:any) => void,
    addID:(id:number)=>void
}

const useCityStore=create<Store>()((set)=>({
    city:"",
    id:0,
    addCity:(sehir:Store["city"])=>set(()=>({city:sehir})),
    addID:(id:Store["id"])=>set(()=>({id:id}))
}))
/* 
const useCityStore=create(
    devtools(
        persist(cityStore,{
            name:"city"
        })
    )
) */

export default useCityStore;

/* type State = {
    city: string
  }
  
  type Action = {
    updateCity: (city: State['city']) => void
  }


  const cityStores = create<State & Action>((set) => ({
    city: '',
    updateCity: (city) => set(() => ({ city: city }))
  })) */
