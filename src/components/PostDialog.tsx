import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,

} from "@/components/ui/dialog"
import ProfilePhoto from "./shared/ProfilePhoto"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { Image as ImageIcon } from "lucide-react"
import { useRef, useState } from "react"
import Image from "next/image"

export function PostDialog({ open, setOpen, src }: { open: boolean, src: string, setOpen: (open: boolean) => void }) {
    const inputRef = useRef<HTMLInputElement>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [file, setFile] = useState<File | null>(null)
   
    console.log(file)

    const fileChnageHandelar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const dataUrl = URL.createObjectURL(file)
            setImagePreview(dataUrl)
            setFile(file)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <form>
                    <DialogHeader>
                        <DialogTitle className="flex gap-2 items-center">
                            <ProfilePhoto src={src} />
                            <div>
                                <h1>Mehedi Hasan Shishir</h1>
                                <p className="text-xs">Post to anyone</p>
                            </div>
                        </DialogTitle>
                    </DialogHeader>
                    <form action="">
                        <div className="flex flex-col">
                            <Textarea
                                id="name"
                                value={""}
                                name="inputText"
                                className="border-none text-lg focus-visible:ring-0 focus-visible:ring-transparent  "
                            />
                            <div className="my-4  flex items-center justify-center ">
                                {imagePreview && (
                                    <Image
                                        src={imagePreview}
                                        width={900}
                                        height={900}
                                        alt="banner"
                                        className="w-72  h-72 rounded"
                                    />
                                )}

                            </div>
                        </div>
                    </form>
                    <DialogFooter>
                        <div className="flex object-center gap-4 ">
                            <Input ref={inputRef} onChange={fileChnageHandelar} type="file" name="image" className="hidden" accept="image/*" />
                            <Button type="submit">Post</Button>
                        </div>
                    </DialogFooter>
                </form>
                <Button onClick={() => inputRef?.current?.click()} variant={"ghost"}>
                    <ImageIcon className="text-blue-500" />
                    <p>Media</p>
                </Button>
            </DialogContent>

        </Dialog>
    )
}
