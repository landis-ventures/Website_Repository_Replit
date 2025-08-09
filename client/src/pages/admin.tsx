import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Mail, Phone, Building, Calendar, MessageCircle, RefreshCw } from "lucide-react";
import type { Consultation } from "@shared/schema";

export default function Admin() {
  const { data: consultations, isLoading, error, refetch } = useQuery<Consultation[]>({
    queryKey: ["/api/consultations"],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getAutomationNeedsLabel = (value: string) => {
    const labels: Record<string, string> = {
      'rpa': 'Robotic Process Automation',
      'idp': 'Intelligent Document Processing',
      'data-processing': 'Data Processing & Reconciliation',
      'workflow': 'End-to-End Workflow Automation',
      'multiple': 'Multiple Services',
      'consultation': 'Needs Consultation'
    };
    return labels[value] || value;
  };

  if (error) {
    return (
      <div className="min-h-screen bg-landis-bg">
        <SEOHead
          title="Admin Dashboard - Consultation Requests | Landis Ventures"
          description="Administrative dashboard for viewing and managing consultation requests."
        />
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-landis-text mb-4">
                Unable to Load Consultations
              </h1>
              <p className="text-landis-text-muted mb-6">
                There was an error loading the consultation requests. Please try again.
              </p>
              <Button onClick={() => refetch()} className="bg-landis-primary text-white">
                <RefreshCw className="w-4 h-4 mr-2" />
                Retry
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-landis-bg">
      <SEOHead
        title="Admin Dashboard - Consultation Requests | Landis Ventures"
        description="Administrative dashboard for viewing and managing consultation requests."
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-landis-text">
                Consultation Requests
              </h1>
              <Button onClick={() => refetch()} variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
            <p className="text-landis-text-muted mt-2">
              {consultations?.length || 0} total consultations
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="bg-landis-card border-landis-border">
                  <CardHeader>
                    <Skeleton className="h-6 w-1/3 bg-landis-border" />
                    <Skeleton className="h-4 w-1/4 bg-landis-border" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-full bg-landis-border" />
                      <Skeleton className="h-4 w-2/3 bg-landis-border" />
                      <Skeleton className="h-4 w-1/2 bg-landis-border" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : consultations && consultations.length > 0 ? (
            <div className="space-y-6">
              {consultations.map((consultation) => (
                <Card key={consultation.id} className="bg-landis-card border-landis-border">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-landis-text">
                          {consultation.firstName} {consultation.lastName}
                        </CardTitle>
                        <p className="text-sm text-landis-text-muted">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          {formatDate(consultation.createdAt.toString())}
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-landis-primary/20 text-landis-primary">
                        {getAutomationNeedsLabel(consultation.automationNeeds)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-landis-text-muted">
                          <Mail className="w-4 h-4 mr-2" />
                          <span className="text-sm">{consultation.email}</span>
                        </div>
                        {consultation.phone && (
                          <div className="flex items-center text-landis-text-muted">
                            <Phone className="w-4 h-4 mr-2" />
                            <span className="text-sm">{consultation.phone}</span>
                          </div>
                        )}
                        <div className="flex items-center text-landis-text-muted">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="text-sm">{consultation.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    {consultation.message && (
                      <div className="mt-4 p-3 bg-landis-bg rounded border border-landis-border">
                        <div className="flex items-start">
                          <MessageCircle className="w-4 h-4 mr-2 mt-0.5 text-landis-text-muted" />
                          <div>
                            <p className="text-sm font-medium text-landis-text mb-1">
                              Project Details:
                            </p>
                            <p className="text-sm text-landis-text-muted whitespace-pre-wrap">
                              {consultation.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 mx-auto text-landis-text-muted mb-4" />
              <h2 className="text-xl font-semibold text-landis-text mb-2">
                No Consultations Yet
              </h2>
              <p className="text-landis-text-muted">
                Consultation requests will appear here when submitted through the contact form.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}