import HeaderModal from "components/modalComponents/HeaderModal"
import "./walletModal.scss"
import { useGetListQuery } from "store/api/walletApi"
import { IListWallet } from "type/wallets"
import { Response } from "type/Response"
import FooterModal from "../FooterModal"

export default function WalletModal() {
  const {data}=useGetListQuery() as Response<IListWallet,unknown>
  console.log(data)
  return (
    <div className='WalletModal'>
        <div className="WalletModalContent">
            <HeaderModal />
            vhvv
            <FooterModal />
        </div>
    </div>
  )
}
