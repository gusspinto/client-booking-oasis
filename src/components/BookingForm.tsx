
import { useState } from 'react';
import { Service } from '@/pages/Index';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, Clock, DollarSign, User, Mail, Phone, MessageSquare, CalendarPlus } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface BookingFormProps {
  service: Service;
}

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

const BookingForm = ({ service }: BookingFormProps) => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateGoogleCalendarUrl = () => {
    if (!date || !time) return '';

    const startDateTime = new Date(date);
    const [hours, minutes] = time.split(':').map(Number);
    startDateTime.setHours(hours, minutes, 0, 0);

    const endDateTime = new Date(startDateTime);
    endDateTime.setMinutes(endDateTime.getMinutes() + service.duration);

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const eventTitle = encodeURIComponent(`${service.name} - BookPro Agency`);
    const eventDetails = encodeURIComponent(
      `Service: ${service.name}\n` +
      `Duration: ${service.duration} minutes\n` +
      `Price: €${service.price}\n` +
      `Client: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `${formData.message ? `Notes: ${formData.message}` : ''}`
    );

    const startTime = formatDate(startDateTime);
    const endTime = formatDate(endDateTime);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startTime}/${endTime}&details=${eventDetails}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time) {
      toast({
        title: "Missing Information",
        description: "Please select a date and time for your appointment.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Booking Confirmed!",
        description: `Your ${service.name} appointment has been scheduled for ${format(date, 'MMMM d, yyyy')} at ${time}.`
      });
      
      // Reset form
      setDate(undefined);
      setTime(undefined);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="animate-fade-in">
      <Card className="mb-6 border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50">
        <CardHeader className="bg-gradient-to-r from-emerald-100 to-teal-100">
          <CardTitle className="text-2xl text-gray-900">{service.name}</CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            {service.description}
          </CardDescription>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              {service.duration} minutes
            </div>
            <div className="flex items-center text-gray-900 font-semibold">
              <DollarSign className="h-5 w-5 mr-2" />
              €{service.price}
            </div>
          </div>
        </CardHeader>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Date and Time Selection */}
          <Card className="border-2 border-indigo-100 hover:border-indigo-200 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center text-indigo-700">
                <CalendarIcon className="h-5 w-5 mr-2" />
                Select Date & Time
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Choose Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-2 border-indigo-200 hover:border-indigo-300",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label>Choose Time</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="mt-2 border-indigo-200 hover:border-indigo-300">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Client Information */}
          <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-700">
                <User className="h-5 w-5 mr-2" />
                Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-2 border-purple-200 focus:border-purple-400"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="mt-2 border-purple-200 focus:border-purple-400"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10 border-purple-200 focus:border-purple-400"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative mt-2">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="pl-10 border-purple-200 focus:border-purple-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Message */}
        <Card className="border-2 border-cyan-100 hover:border-cyan-200 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center text-cyan-700">
              <MessageSquare className="h-5 w-5 mr-2" />
              Additional Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="message">Tell us about your goals or any specific requirements</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="mt-2 min-h-[100px] border-cyan-200 focus:border-cyan-400"
              placeholder="Share any additional details that will help us prepare for your session..."
            />
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Ready to book?</h4>
                  <p className="text-gray-600">You'll receive a confirmation email shortly.</p>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? 'Booking...' : `Book Appointment - €${service.price}`}
                </Button>
              </div>
              
              {date && time && (
                <div className="pt-4 border-t border-emerald-200">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => window.open(generateGoogleCalendarUrl(), '_blank')}
                    className="w-full sm:w-auto border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                  >
                    <CalendarPlus className="h-4 w-4 mr-2" />
                    Add to Google Calendar
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    Complete your booking first, then add to your calendar
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default BookingForm;
