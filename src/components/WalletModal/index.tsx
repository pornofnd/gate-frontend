import HeaderModal from "components/modalComponents/HeaderModal"
import "./walletModal.scss"
import { useGetListQuery } from "store/api/wallet"
import { IListWallet } from "type/wallets"
import { Response } from "type/Response"

export default function WalletModal() {
    const {data}=useGetListQuery() as Response<IListWallet,unknown>
    console.log(data)
  return (
    <div className='WalletModal'>
        <div className="WalletModalContent">
            <HeaderModal />
        </div>
    </div>
  )
}
