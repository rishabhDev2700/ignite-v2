import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
export function ContactForm() {
    return (
        <form className="sm:w-2/3 md:w-1/2 mx-auto lg:py-8 bg-transparent rounded-lg" action="https://formcarry.com/s/L-LwLq0iz73" method="post">
            <Card className="grid gap-2 p-8 shadow-md shadow-black/20 bg-neutral-900 text-white border-black">
              
                <div className="grid grid-cols-4 items-center gap-2">
                    <Label htmlFor="name">
                        Name
                    </Label>
                    <Input
                        id="name"
                        placeholder="Your Name"
                        className="col-span-3 border-2 border-neutral-400 text-neutral-800 font-medium text-sm"
                        name="name"
                        required
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username">
                        Email
                    </Label>
                    <Input
                        id="email"
                        placeholder="Your Email"
                        className="col-span-3 border-2 border-neutral-400 text-neutral-800 font-medium text-sm"
                        name="email"
                        required
                    />
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="phone">
                        Phone
                    </Label>
                    <Input
                    type="tel"
                        id="phone"
                        placeholder="Your Phone"
                        className="col-span-3 border-2 border-neutral-400 text-neutral-800 font-medium text-sm"
                        name="phone"
                        required
                        pattern="\(\d{3}\) \d{3}-\d{4}"
                    />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">

                <Label htmlFor="service">Service</Label>
                <Select required>
                    <SelectTrigger className="w-[235px]  border-2 border-neutral-400 text-neutral-800 font-medium text-sm">
                        <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="powerwash">powerwash</SelectItem>
                        <SelectItem value="fleet-wash">Fleet-wash</SelectItem>
                        <SelectItem value="line-painting">Line Painting</SelectItem>
                        <SelectItem value="warehouse-washout">Warehouse Washout</SelectItem>
                        <SelectItem value="gas-station">Gas Station service and cleaning</SelectItem>
                        <SelectItem value="waste-disposal">Waste Disposal</SelectItem>
                        <SelectItem value="other">Other</SelectItem>


                    </SelectContent>
                </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="message">
                        Message
                    </Label>
                    <Textarea
                        id="message"
                        placeholder="Your Message"
                        className="col-span-3 border-2 border-neutral-400 text-neutral-800 font-medium text-sm"
                        rows="10"
                        name="message"
                        required
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="address">
                        Address
                    </Label>
                    <Textarea
                        id="address"
                        placeholder="Your Address"
                        className="col-span-3 border-2 border-neutral-400 text-neutral-800 font-medium text-sm "
                        rows="10"
                        name="address"
                        required
                    />
                </div>

                <Button type="submit" variant="" className="py-8 w-44 mx-auto bg-blue-500 text-white hover:bg-blue-600 text-lg hover:scale-95 duration-200">Send</Button>
            </Card>
        </form>
    )
}
